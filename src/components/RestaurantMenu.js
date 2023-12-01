import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resID } = useParams();
  // console.log(resID);
  const [resMenu, setResMenu] = useState([]);
  console.log(resMenu);

  useEffect(() => {
    const data = fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.362526&lng=85.825302&restaurantId=" + resID + "&catalog_qa=undefined&submitAction=ENTER"
    );
    data
      .then((data) => {
        return data.json();
      }).catch((err) => console.log(err))
      .then((value) => {
        console.log(value);
        setResMenu(value?.data?.cards);
      })
      .catch((err) => console.log(err));
  }, []);

  if (resMenu?.length === 0) {
    return <Shimmer />;
  }

  const { name, avgRatingString, costForTwoMessage, cuisines, areaName, sla } =
    resMenu[0]?.card?.card?.info;

  const {offers} = resMenu[1]?.card?.card?.gridElements?.infoWithStyle

  const { title,itemCards } =
    resMenu[2]?.groupedCard?.cardGroupMap.REGULAR.cards[1].card.card;
  console.log(itemCards);

  return (
    <div className="res-menu-container">
      <div>
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>
          {areaName}, {sla.lastMileTravelString}
        </p>
        <p>{avgRatingString} stars</p>
        <p>{costForTwoMessage} stars</p>
      </div>
      <div className="offers">
        {offers.map((offer) => (
          <div className="offer-card" key={offer?.info?.offerIds[0]}>
            <h4>{offer?.info?.header}</h4>
            <p>
              {offer?.info?.couponCode} | {offer?.info?.description}
            </p>
          </div>
        ))}
      </div>
      <div className="recommended">
        <h3>{title}</h3>
        {itemCards?.map((item) => (
          <div key={item?.card?.info?.id}>{item?.card?.info?.name}</div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
