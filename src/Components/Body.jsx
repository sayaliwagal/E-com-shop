import { Link } from "react-router";
import { Card } from "./Card";
import { useEffect, useRef, useState } from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";
import { filterValues, filterByCategoryAndPrice } from "../Utils/helper";
import useCallApi from "../Utils/useCallApi";
import SearchBar from "./searchBar";
import Filters from "./Filters";
import { div } from "motion/react-client";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [loading, setLoading] = useState(true);

  const data = useCallApi("https://dummyjson.com/products?limit=0");

  useEffect(() => {
    if (!data || !data.products) return;
    setProducts(data.products);

    setFilterProducts(data.products);
    setLoading(false);
    if (Array.isArray(data?.products)) {
      const uniqueCategories = Array.from(
        new Set(data?.products?.map((p) => p.category))
      );
      setCategories(uniqueCategories);
    }
  }, [data]);

  const applyFilters = () => {
    let filtered = filterValues(products, searchText);
    filtered = filterByCategoryAndPrice(filtered, selectedCategory, priceRange);
    setFilterProducts(filtered);
  };
  useEffect(() => {
    applyFilters();
  }, [searchText, selectedCategory, priceRange, products]);
  const ref = useRef("");
  const handleRef = () => {
    ref.current.focus();
    // ref.current.style.backgroundColor ="gray"
  };
  useEffect(() => {
    handleRef();
  }, []);

  return (
    <div className="max-w-10xl mx-auto px-4 py-8">
      <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Products List
      </h3>
      <div className="w-full bg-white rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-8 mb-6">
        {/* Search Section  */}
        <div className="flex-1">
          <SearchBar
            searchText={searchText}
            setSearchText={setSearchText}
            onSearch={applyFilters}
            ref={ref}
          />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Filters
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-4 md:px-10 mt-6">
        {loading ? (
          <>
              {Array.from({ length: 30 }).map((item, index) => {
                
                return (
                  <div
                  key={index} 
                  className="w-[230px] h-[300px] bg-white rounded-2xl shadow-sm p-4 flex flex-col items-center">
                  <ShimmerThumbnail
                    
                    index={item}
                    height={180}
                    width={200}
                    className="rounded-xl"
                    />
                    <div className="mt-4 w-3/4 h-3 bg-gray-200 rounded"></div>
                    <div className="mt-2 w-1/2 h-3 bg-gray-200 rounded"></div>
                    </div>
                );
              })}
          </>
        ) : (
          filterProducts?.map((item) => {
            return (
              <Card key={item.id} products={item}>
                {/* <p>hello</p> */}
              </Card>
            );
          })
        )}
      </div>
      </div>
    // </div>
  );
};
export default Body;
