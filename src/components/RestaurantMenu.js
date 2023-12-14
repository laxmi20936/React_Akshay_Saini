import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resID } = useParams();
  // console.log(resID);
  console.log("A");

  const resMenu = useRestaurantMenu(resID);
  console.log("B ", resMenu);

  if (resMenu?.length === 0) {
    return <Shimmer />;
  }

  const { name, avgRatingString, costForTwoMessage, cuisines, areaName, sla } =
    resMenu[0]?.card?.card?.info;

  const { offers } = resMenu[1]?.card?.card?.gridElements?.infoWithStyle;

  const { title, itemCards } =
    resMenu[2]?.groupedCard?.cardGroupMap.REGULAR.cards[1].card.card;
  // console.log(itemCards);
  const allCatotegory = resMenu[2]?.groupedCard?.cardGroupMap.REGULAR.cards;
  console.log(allCatotegory);

  const filterCategory = allCatotegory.filter(
    (category) =>
      category?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(filterCategory);
  return (
    <div className="res-menu-container w-[800]  mx-auto px-4 my-7">
      <div className="res-data text-left py-3 flex justify-between border-b border-b-slate-300 border-dashed mb-5">
        <div>
          <h3 className="font-bold text-3xl">{name}</h3>
          <div className="py-2">
            <p>{cuisines.join(", ")}</p>
            <p>
              {areaName}, {sla.lastMileTravelString}
            </p>
          </div>
        </div>
        <div className="mr-14">
          <p className="border border-gray-700 rounded py-4 px-2">
            ⭐ {avgRatingString}
          </p>
        </div>

        {/* <p>{costForTwoMessage} stars</p> */}
      </div>
      <div className="offers flex flex-wrap border-b border-b-slate-300 pb-6">
        {offers.map((offer) => (
          <div
            className="offer-card border border-slate-950 my-2 mr-2 p-2 cursor-pointer bg-slate-200"
            key={offer?.info?.offerIds[0]}
          >
            <h4>{offer?.info?.header}</h4>
            <p>
              {offer?.info?.couponCode} | {offer?.info?.description}
            </p>
          </div>
        ))}
      </div>
      <div className="all-category mt-6">
        {filterCategory.map((items) => (
          <RestaurantCategory {...items.card.card} />
        ))}

        {/* {filterCategory[0]?.card?.card?.title}
        {filterCategory[1]?.card?.card?.title}
        {filterCategory[2]?.card?.card?.title}
        {filterCategory[3]?.card?.card?.title} */}
        {/* {filterCategory[0].card.card} */}

        {/* <h3>{title}</h3>
        {itemCards?.map((item) => (
          <div key={item?.card?.info?.id}>{item?.card?.info?.name}</div>
        ))} */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
