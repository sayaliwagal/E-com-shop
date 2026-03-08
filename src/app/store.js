import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Features/cart/cartSlice.js';
import wishlistReducer from '../Features/wishlist/wishlistSlice.js';
import themeReducer from '../Features/theme/themeSlice.js';
import { loadState, saveState } from '../Utils/localStorage.js';

const persistedState = loadState();

export const store = configureStore({
    reducer :{
        cart: cartReducer,
        wishList: wishlistReducer,
        theme: themeReducer,
    },
    preloadedState : persistedState,
});


store.subscribe(() =>{
    saveState({
        cart: store.getState().cart,
        wishList: store.getState().wishList,
        
    })
});