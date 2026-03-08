import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem("theme") || "light";
    }
    return "light";
};

const initialState = {
    mode: getInitialTheme(),
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
            if (typeof window !== 'undefined') {
                localStorage.setItem("theme", state.mode);
                const root = window.document.documentElement;
                if (state.mode === "dark") {
                    root.classList.add("dark");
                } else {
                    root.classList.remove("dark");
                }
            }
        },
        setTheme: (state, action) => {
            state.mode = action.payload;
            if (typeof window !== 'undefined') {
                localStorage.setItem("theme", state.mode);
                const root = window.document.documentElement;
                if (state.mode === "dark") {
                    root.classList.add("dark");
                } else {
                    root.classList.remove("dark");
                }
            }
        }
    }
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;