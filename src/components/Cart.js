import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import ItemList from "./ItemList";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart , deleteItem} from "../utils/cartSlice";

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
  const dispatch = useDispatch()
  console.log(cartItems, "cartItems");

  const clearCartItems = () =>{
    dispatch(clearCart())
  }
  const deleteItemCart = (index) => {
    console.log(index, "index")
    dispatch(deleteItem())
  }
  
  return cartItems.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="w-[800] mx-auto mt-10">
      <div className="text-end">
        <button className="bg-slate-400 p-3 rounded-lg mb-7" onClick={clearCartItems}>Clear cart</button>
      </div>
      {cartItems.map((items, index) => (
        <div className="flex  justify-between" key={index} >
          <div className="w-11/12">
            <ItemList item={items} />
          </div>
          <div className="mt-8 ml-9 w-1/12 flex items-center">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAY1BMVEX///8AAABPT08tLS329vYZGRmYmJjq6uo9PT3k5OT6+vqenp5sbGyjo6Pg4ODc3NysrKx8fHwlJSVVVVXBwcF2dna5ubkdHR0SEhLIyMg4ODiRkZFHR0dcXFwICAjPz8+Hh4esUulWAAACCUlEQVR4nO3c246CMBSFYVQcBESKBzyCvv9TTjBq24EAKbQk478ut1C+eEEpZNfzCGmNv+mIP61P7FYd2YkpfddZj1yn84XbPsDtZjLg/tQHWO6tAUKRtObQxzebHdpHEaGp737pBxiay93M57vhVTG7F+XugLkRMHYHjAECBAgQIECAAL8QKNwBzZamG3dAw3VfzzXR8GRmPi9Kiq73BmOkSCJDoOcFoYMExjxCyD9JmsSWkqRj+MTR3hRyHOH98N4er8rwl5uWJ+TDYODcLnAOECDASYBrUaV2B1rFVTle/a0fnoevnQFP59dvqf4hJXs9ukeZVr68J7Rzw4cpK0C5itWmmfnn2T3QTpKTRcNK2wpQfrryS6X8kCc9lHIpv9KEboBHucrxF0r9R570o5QXEhjUnztsAJfmwCVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEKB74EwBqldUdslTd9VbKsD6WFaAssUmVcvrT7N/pLUvyRbYhj5RK8Dt+y+Mdlr90+qq73Gxe8ODht0A7XSF3URaJS/0cnm9V+X7tdTrRf48XNwahrLVV7eoUtbKx6pc7wsqn4c3DvStjX8AAToEFt0XGZJiMNDyzkdmux2p8bPuq5gnG2GrYF9ka0vJxDhbGUfWMgqPtOcXSQtZFKlehTAAAAAASUVORK5CYII=" 
            className="h-8 w-8 cursor-pointer"
            onClick={()=> deleteItemCart(index)}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
