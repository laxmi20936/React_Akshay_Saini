import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],  
    },
    reducers:{
        addItems: (state, action) => {
           state.items.push(action.payload)
           console.log(current(state));
        },
        clearCart : (state, action) => {
        //    state.items = [] // correct  hai
           state.items.length = 0
           console.log(current(state), "clearCart");
        }, 
        deleteItem: (state, action) => {
            state.items.splice(action.payload,1)
            console.log(current(state), "del");
        }
    }
})
const allActions = cartSlice.actions 
export const {addItems, clearCart, deleteItem} = allActions

export default cartSlice.reducer