import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [allRes, setAllRes] = useState(restaurantsList);
  const [res, setRes] = useState(restaurantsList);
  const [ip, setIp] = useState();

  const changeHandler = (e) => {
    setIp(e.target.value);
  };

  const searchHandler = () => {
    const searchFiltered = allRes.filter((x) =>
      x.info.name.toLocaleLowerCase().includes(ip));
    console.log(searchFiltered);
    setRes(searchFiltered);
  };

  return (
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
