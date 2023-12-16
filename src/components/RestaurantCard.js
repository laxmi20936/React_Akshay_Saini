import { IMG_URL } from "../utils/constants";
import { useContext } from "react";
import { userData } from "../utils/UserContext";

const RestaurantCard = (props) => {
  const data = useContext(userData);
  const { resObj } = props;
  // console.log(resObj)
  const { name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo } =
    resObj;
  return (
    <div className="w-[260px] p-3 bg-slate-200 m-2 rounded-sm hover:bg-slate-300">
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
      <h4>{sla?.deliveryTime} minutes</h4>
      <h4>{data?.loggedUser?.name}</h4>
    </div>
  );
};

export const withRestaurantOffer = (RestaurantCard) => {
  return (props) => {
    const { header, subHeader, discountTag } =
      props?.resObj?.aggregatedDiscountInfoV3;
    return (
      <div className="relative">
        <p className=" text-white bg-slate-500 absolute top-36 left-5 mt-[-7.5]">
          {header} {subHeader} {discountTag}
        </p>
        <RestaurantCard {...props} a="laxmi" />
      </div>
    );
  };
};

export default RestaurantCard;
