import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Features/cart/cartSlice.js';
import wishlistReducer from '../Features/wishlist/wishlistSlice.js';
import themeReducer from '../Features/theme/themeSlice.js';
import { loadState, saveState } from '../Utils/localStorage.js';

const persistedState = loadState();

// Middleware to handle theme DOM manipulation
const themeMiddleware = (store) => (next) => (action) => {
    const result = next(action);

    // Handle theme changes
    if (action.type?.startsWith('theme/')) {
        const themeState = store.getState().theme;
        if (typeof window !== 'undefined') {
            const root = window.document.documentElement;
            if (themeState.mode === "dark") {
                root.classList.add("dark");
            } else {
                root.classList.remove("dark");
            }
        }
    }

    return result;
};

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishList: wishlistReducer,
        theme: themeReducer,
    },
    preloadedState: persistedState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(themeMiddleware),
});

// Subscribe to save state changes
store.subscribe(() => {
    saveState({
        cart: store.getState().cart,
        wishList: store.getState().wishList,
        theme: store.getState().theme,
    });
});