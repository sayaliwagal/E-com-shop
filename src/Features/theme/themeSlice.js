import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light", // Default to light, will be overridden by persisted state
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
            // DOM manipulation happens in middleware (see store.js)
        },
        setTheme: (state, action) => {
            state.mode = action.payload;
            // DOM manipulation happens in middleware (see store.js)
        }
    }
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;