import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resObj } = props;
  // console.log(resObj)
  const { name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo } =
    resObj;
  return (
    <div className="w-[255px] p-3 bg-slate-200 m-2 rounded-sm hover:bg-slate-300">
      <img
        className="res-image"
        src={IMG_URL + cloudinaryImageId}
        alt="res-item"
      />
      <h4 className="font-semibold my-2">{name}</h4>
      <h4 className="my-2">{cuisines.join(", ")}</h4>
      {/* <h4>{cuisines.toString()}</h4> */}
      <h4 className="my-2">{avgRating} stars</h4>
      <h4 className="my-2">{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
