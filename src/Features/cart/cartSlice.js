import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
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
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
            toast.success(`${action.payload.title} has been removed!!`);
        },
        clearCart: (state) => {
            state.items = [];
            toast.success("All Products has been removed!!");
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;