import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { addToCart } from "../cart/cartSlice";

const initialState = {
    items : [],
}

// Create the thunk for moving item to cart
export const moveToCart = createAsyncThunk(
    'wishList/moveToCart',
    async (item, { dispatch, getState }) => {
        // Dispatch remove from wishlist
        dispatch(removeFromWishList(item));
        // Dispatch add to cart
        dispatch(addToCart(item));
        // Show success message
        toast.success(`${item.title} moved to cart!`);
    }
);

const wishListSlice = createSlice({
    name : "wishList",
    initialState,
    reducers : {
        addToWishList : ((state, action) =>{
            const existingItem = state.items.find((item) => 
            (item.id === action.payload.id));
            if(existingItem){
                toast.error(`${action.payload.title} is already in wishList!`);
                return;
            }else{
                state.items.push(action.payload);
                toast.success(`${action.payload.title} successfully added to wishList!`);

            }
    }),

    removeFromWishList : ((state, action) => {
        const wishListItems = state.items.filter((item) => item.id !== action.payload.id);
        state.items = wishListItems;
        toast.success(`${action.payload.title} removed from wishList!`);
    }),

    // Removed the old moveToCart reducer since it's now a thunk
}

});


export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;