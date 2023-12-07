import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom'
import useOnline from "../utils/useOnline";

const Body = () => {
  console.log("Body");
  const [allRes, setAllRes] = useState([]);
  const [res, setRes] = useState([]);
  const [ip, setIp] = useState();
  console.log(res)
  
  const onlineStatus = useOnline();

  useEffect(() => {
    // console.log("useEffect one called");
    fetchData();
    console.log("oo");
  }, []);
  
  
  const fetchData = async () => {
   try {
    const a = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.362526&lng=85.825302&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonValue = await a.json();
    console.log(jsonValue);
    setRes(
      jsonValue?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setAllRes(
      jsonValue?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    
   } catch (error) {
    console.log(error.message)
   }
  };


  const changeHandler = (e) => {
    setIp(e.target.value);
  };

  const searchHandler = () => {
    const searchFiltered = allRes.filter((x) =>
      x.info.name.toLocaleLowerCase().includes(ip.toLowerCase())
    );
    console.log(searchFiltered);
    setRes(searchFiltered);
  };
  
  if(onlineStatus === false){
    return <h1>Offine</h1>
  }
  
  return allRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => changeHandler(e)}
        />
        <button onClick={() => searchHandler()}>Search</button>
        <br />
        <button
          onClick={() => {
            const filteredRes = allRes.filter((x) => x.info.avgRating > 4);
            // console.log(filteredRes);
            setRes(filteredRes);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {res?.map((resItem) => (
          <Link to={"/restaurant/" + resItem?.info?.id} key={resItem?.info?.id}>
            <RestaurantCard  resObj={resItem?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
