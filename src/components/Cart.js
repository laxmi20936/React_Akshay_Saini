import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import ItemList from "./ItemList";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart, deleteItem } from "../utils/cartSlice";
import { DEL_IMG } from "../utils/constants";

const EmptyCart = () => {
  return (
    <div className="w-[500] mx-auto border border-black text-center bg-slate-300 p-10 my-10 rounded-lg">
      <h1 className="font-bold my-2 text-lg"> Cart is empty</h1>
      <p className="decoration-slate-950 underline">
        <Link to="/"> Continue Shopping</Link>
      </p>
    </div>
  );
};

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems, "cartItems");

  const clearCartItems = () => {
    dispatch(clearCart());
  };
  const deleteItemCart = (index) => {
    console.log(index, "index");
    dispatch(deleteItem());
  };

  return cartItems.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="w-[800] mx-auto mt-10">
      <div className="text-end">
        <button
          className="bg-slate-400 p-3 rounded-lg mb-7"
          onClick={clearCartItems}
        >
          Clear cart
        </button>
      </div>
      {cartItems.map((items, index) => (
        <div className="flex  justify-between" key={index}>
          <div className="w-11/12">
            <ItemList item={items} />
          </div>
          <div className="mt-8 ml-9 w-1/12 flex items-center">
            <img
              src={DEL_IMG}
              className="h-8 w-8 cursor-pointer"
              onClick={() => deleteItemCart(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
