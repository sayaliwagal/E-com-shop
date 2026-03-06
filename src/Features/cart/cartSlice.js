import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


// const loadCartFromStorage = () => {
//     try{
//         const data = localStorage.getItem("cart");
//         return data ? JSON.parse(data) : [];
//     } catch{
//         return [];
//     }
// }

const initialState = {
    // items : loadCartFromStorage(),
    items : [],

};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(
                (item)=> item.id === action.payload.id);
                if(existingItem){
                       toast.error(`${action.payload.title} is already added to cart!!`);
      return;
                }else{
                    state.items.push({ ...action.payload, qty : 1})
                     toast.success(`${action.payload.title} has Successfully added to the cart!!`);
                }

             
        },

        removeFromCart:(state, action) => {
            const item = state.items.find((item) =>
                item.id === action.payload
        );
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
            if(item)
            toast.success(`${item.title} has been removed!!`);
        },
        clearCart: (state) => {
            state.items = [];
            toast.success("All Products has been removed!!");
        },

        increaseQty: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.qty += 1;
            }
        },

        decreaseQty: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.qty > 1) {
                if (item.qty > 1) {
                    item.qty -= 1;
                } else {
                    state.items = state.items.filter((i) => i.id !== action.payload);
                }
            }
        }
    }
});

export const { addToCart, removeFromCart, clearCart, increaseQty, decreaseQty } = cartSlice.actions;

// Selector function to calculate total price
export const selectTotalPrice = (state) => {
    return state.cart.items.reduce((sum, item) => sum + item.price * item.qty, 0);
};
  export const totalItems = (state) => {
    return state.cart.items.reduce((sum, item) => sum + item.qty, 0);
  };


export default cartSlice.reducer;