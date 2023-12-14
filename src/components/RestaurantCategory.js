import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = (props) => {
  // console.log(props);
  const [hideShowData, setHideShowData] = useState(false)
  const { title, itemCards } = props;

  // console.log("items", itemCards);

  const hideShow = () => {

  }
  return (
    <div className="border-b-8 border-slate-400 mt-8">
      <div className="flex justify-between " onClick={hideShow}>
        <h2 className="font-bold text-2xl">{title} ({itemCards.length})</h2>
        <p className="mr-8">🔻</p>
      </div>
      {hideShowData && <div className="category pt-2 ">
        {itemCards?.map((item) => (
          <ItemList key={item?.card.info.id} item={item.card} />
        ))}
      </div>}
    </div>
  );
};

export default RestaurantCategory;
