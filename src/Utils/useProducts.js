// hook/useProducts.js
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts  }  from "../Features/product/productSlice.js";
import { useEffect } from "react";

export const useProducts = () => {
 const dispatch = useDispatch();
 const products = useSelector((state) => state.products.items);
 const productCategories = useSelector((state) => state.products.categories);
 const loading = useSelector((state) => state.products.loading);
 const error = useSelector((state) => state.products.error);

 useEffect(() => {
    dispatch(fetchProducts());
 }, [dispatch]);

 return { products, categories, productCategories, loading, error };


};