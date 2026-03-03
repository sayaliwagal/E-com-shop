import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Features/cart/cartSlice.js'


export const store = configureStore({
    reducer :{
        cart: cartReducer,
    }
});

// store.subscribe(() =>{
//     const state = store.getState();
//     if(state.cart?.items)
//     localStorage.setItem("cart", JSON.stringify(state.cart.items))
// })