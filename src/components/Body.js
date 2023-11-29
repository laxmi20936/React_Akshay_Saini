import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRes, setAllRes] = useState([]);
  const [res, setRes] = useState([]);
  const [ip, setIp] = useState();

  useEffect(() => {
    fetchData();
    console.log("oo");
  }, []);

  const fetchData = async () => {
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
            console.log(filteredRes);
            setRes(filteredRes);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {res?.map((resItem) => (
          <RestaurantCard key={resItem?.info?.id} resObj={resItem?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
