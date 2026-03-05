import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Features/cart/cartSlice.js';
import wishlistReducer from '../Features/wishlist/wishlistSlice.js';


export const store = configureStore({
    reducer :{
        cart: cartReducer,
        wishList: wishlistReducer,
    }
});


// store.subscribe(() =>{
//     const state = store.getState();
//     if(state.cart?.items)
//     localStorage.setItem("cart", JSON.stringify(state.cart.items))
// })