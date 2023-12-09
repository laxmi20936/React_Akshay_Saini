import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {
  console.log("ResMenu");
  const { resID } = useParams();
  // console.log(resID);
  console.log("A");

  const resMenu = useRestaurantMenu(resID)
  console.log("B ", resMenu);


  if (resMenu?.length === 0) {
    return <Shimmer />;
  }

  const { name, avgRatingString, costForTwoMessage, cuisines, areaName, sla } =
    resMenu[0]?.card?.card?.info;

  const {offers} = resMenu[1]?.card?.card?.gridElements?.infoWithStyle

  const { title,itemCards } =
    resMenu[2]?.groupedCard?.cardGroupMap.REGULAR.cards[1].card.card;
  // console.log(itemCards);

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
