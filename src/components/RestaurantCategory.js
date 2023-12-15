import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = (props) => {
  const [hideShowData, setHideShowData] = useState(false)
  const { title, itemCards } = props;

  const hideShow = () => {
    props.setIndexData(props.index);
    setHideShowData(!hideShowData)
  };
  return (
    <div className="border-b-8 border-slate-400 mt-8">
      <div className="flex justify-between cursor-pointer" onClick={hideShow}>
        <h2 className="font-bold text-2xl">
          {title} ({itemCards.length})
        </h2>
        <p className="mr-8">{props.indexData === props.index  &&  hideShowData ?   "🔺":"🔻" }</p>
      </div>
      {props.indexData === props.index &&  hideShowData && (
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
