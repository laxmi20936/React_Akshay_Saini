import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { userData } from "../utils/UserContext";
import RestaurantCard from "./RestaurantCard";
import { withRestaurantOffer } from "./RestaurantCard";
const Body = () => {
  console.log("Body");

  const [allRes, setAllRes] = useState([]);
  const [res, setRes] = useState([]);
  const [ip, setIp] = useState("");
  const [newIp, setNewIp] = useState("");
  const ResOfferLabel = withRestaurantOffer(RestaurantCard);
  // console.log(ResOfferLabel)

  const data = useContext(userData);
  console.log(data);
  console.log(res);

  const onlineStatus = useOnline();

  useEffect(() => {
    // console.log("useEffect one called");
    fetchData();
    console.log("oo");
  }, []);

  const fetchData = async () => {
    try {
      const a = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const jsonValue = await a.json();
      console.log("AA", jsonValue);
      setRes(
        jsonValue?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setAllRes(
        jsonValue?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error.message);
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

  if (onlineStatus === false) {
    return <h1>Offine</h1>;
  }

  return allRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mt-4">
      <div className="mb-4 px-28">
        <input
          className="border-solid border-neutral-950 border-2 p-1"
          type="text"
          placeholder="Search here"
          onChange={(e) => changeHandler(e)}
        />
        <button
          className="m-6 px-4 py-2 bg-green-300 rounded-sm"
          onClick={() => searchHandler()}
        >
          Search
        </button>
        <button
          className="ml-3 px-4 py-2 bg-green-300 rounded-sm"
          onClick={() => {
            const filteredRes = allRes.filter((x) => x.info.avgRating > 4);
            // console.log(filteredRes);
            setRes(filteredRes);
          }}
        >
          {"Top rated restaurant"}
        </button>
        <input
          className="border-solid border-neutral-950 border-2 p-1 mx-3"
          onChange={(e) => {
            // setNewIp(e.target.value);
            data.setUserData1({ ...data.loggedUser, name: e.target.value });
          }}
          // value={setIp}
        />
        {data?.loggedUser?.name}
      </div>
      <div className="flex flex-wrap mx-auto w-[73%]">
        {res?.map((resItem) => (
          <Link to={"/restaurant/" + resItem?.info?.id} key={resItem?.info?.id}>
            {resItem?.info?.aggregatedDiscountInfoV3?.header ||
            resItem?.info?.aggregatedDiscountInfoV3?.subHeader ||
            resItem?.info?.aggregatedDiscountInfoV3?.subHeader ? (
              <ResOfferLabel resObj={resItem?.info} />
            ) : (
              <RestaurantCard resObj={resItem?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
