import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    items : [],
}

const wishListSlice = createSlice({
    name : "wishList",
    initialState,
    reducers : {
        addToWishList : (state, action) => {
            const existingItem = state.items.find((item) => 
            (item.id === action.payload.id));
            if(existingItem){
                toast.error(`${action.payload.title} is already in wishList!`);
                return;
            }else{
                state.items.push(action.payload);
                toast.success(`${action.payload.title} successfully added to wishList!`);
            }
        },
        removeFromWishList : (state, action) => {
            const item = state.items.find((item) =>
                item.id === action.payload
            );
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
            if(item)
            toast.success(`${item.title} has been removed from wishList!`);
        },
        clearWishList: (state) => {
            state.items = [];
            toast.success("All items has been removed from wishList!!");
        },
        isLiked: (state, action) => {
            return state.items.some((item) => item.id === action.payload);
        }
    }
});

export const { addToWishList, removeFromWishList, clearWishList, isLiked } = wishListSlice.actions;
export default wishListSlice.reducer;