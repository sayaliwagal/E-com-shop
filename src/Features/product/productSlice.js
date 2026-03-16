import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const response = await fetch("https://dummyjson.com/products?limit=0");
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.products;
    }
);
const initialState = {
    items : [],
}

const productSlice = createSlice({
    name : "products",
    initialState: {
        items : [],
        categories : [],
        loading : false,
        error : null
    },
    reducers : {},
    extraReducers : (builder) =>{
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;

            //generate unique categories
            const uniqueCategories = [ ...new Set(action.payload.map(p => p.category))];
            state.categories = uniqueCategories;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default  productSlice.reducer;