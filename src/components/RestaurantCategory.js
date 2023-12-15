import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = (props) => {
  const { title, itemCards } = props;

  const hideShow = () => {
    // console.log("laxmi", props.indexData, props.index)
    props.setIndexData(props.index);
    if(props.indexData === props.index){
    props.setIndexData(null)}
  };

  return (
    <div className="border-b-8 border-slate-400 mt-8">
      <div className="flex justify-between cursor-pointer" onClick={hideShow}>
        <h2 className="font-bold text-2xl">
          {title} ({itemCards.length})
        </h2>
        <p className="mr-8">{props.indexData === props.index ?   "🔺":"🔻" }</p>
      </div>
      {(props.indexData === props.index) && (
        <div className="category pt-2 ">
          {itemCards?.map((item) => (
            <ItemList key={item?.card.info.id} item={item.card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
