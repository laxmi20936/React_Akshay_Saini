// import { IMG_URL } from "../utils/constants";
import { IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
const ItemList = (props) => {
  const dispatch = useDispatch();
  const { item } = props;
  const { info } = item;
  console.log("info", info);
  const { name, imageId, description, price, defaultPrice } = info;
  // border-b-2

  const addItemss = () => {
    dispatch(addItems(item));
  };

  return (
    <div className="item-list py-7 pb-10 flex justify-between border-b-2">
      <div className="w-9/12">
        <h4 className="font-bold">{name}</h4>
        <h4 className="text-slate-500 py-2">{description}</h4>
        <h4> ₹ {price / 100 || defaultPrice / 100}</h4>
      </div>
      <div className="w-2/12">
        <div className="relative">
          {imageId && <img src={`${IMG_URL}${imageId}`} alt="foodImg" />}
          <div className="absolute top-16 right-6">
            <button className="px-1 py-1 bg-white border border-black rounded text-cyan-300 font-semibold" onClick={() => addItemss()}>
              {/* <span className="mr-2" onClick={() => addItemss()}>
                +
              </span> */}
              Add
              {/* <span className="ml-2">-</span> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
