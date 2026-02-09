import { createContext, useContext, useEffect, useState} from 'react'
import useCallApi from "../useCallApi.js"

const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
    const [ products, setProducts ] = useState([]);
    const [ categories, setCategories ] = useState([]);

  const { data, loading, error } = useCallApi(
    "https://dummyjson.com/products?limit=0"
  );

  useEffect (() => {
    if(!data?.products) return;

    setProducts(data.products);

    const unique = [ ...new Set(data.products.map(p => p.category))];
    setCategories(unique);
  }, [data]);

  return (
    <ProductContext.Provider value={{ products, categories, loading, error }} >
        {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
