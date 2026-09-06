import { Card } from "./Card.jsx";
import { useEffect, useRef, useState } from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";
import { filterValues, filterByCategoryAndPrice } from "../Utils/helper.js";
import Error from "../Pages/Error.jsx";
import SearchBar from "./searchBar.jsx";
import Filters from "./Filters.jsx";
import { useParams, useSearchParams } from "react-router";
import { useProducts } from "../Utils/Context/ProductContext.jsx";
import { useSearch } from "../Utils/Context/SearchContext.jsx";

const ProductListing = () => {

  const { category } = useParams();
  const [searchParams] = useSearchParams();
  // const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const searchText = searchParams.get("search") || "";
  const categorys = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 2000]);

  // const [loading, setLoading] = useState(true);

  const { products, loading, error, categories } = useProducts();
  const ref = useRef(null);

  useEffect(() => {
    // console.log('ProductListing useEffect - category from URL:', category, 'selectedCategory will be:', category || "All");

    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("All");
    }
  }, [products, category]);

  useEffect(() => {
    applyFilters();
  }, [products, searchText, selectedCategory, priceRange]);

  //Filter Logic
  const applyFilters = () => {
    let filtered = filterValues(products, searchText);
    filtered = filterByCategoryAndPrice(
      filtered,
      selectedCategory === "All" ? null : selectedCategory,
      priceRange);
    // console.log('ProductListing - ap/zplyFilters result:', filtered.length, 'products for category:', selectedCategory);
    setFilterProducts(filtered);
  };
  const handleRef = () => {
    if (ref.current && typeof ref.current.focus === "function")
      ref.current.focus();
    // ref.current.style.backgroundColor ="gray"
  };
  useEffect(() => {
    handleRef();
  }, []);

  // Shared grid classes — same breakpoints used for skeletons AND real cards,
  // so the layout doesn't jump/reflow the moment loading finishes.

  const gridClasses = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6";

  //Loading UI
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">
          Loading Products.....
        </h3>
        <div className={`${gridClasses} px-4 md:px-6 mt-4`}>
          {Array.from({ length: 12 }).map((item, index) => {
            return (
              <div
                key={index}
                className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-sm p-4 flex flex-col items-center"
              >
                <ShimmerThumbnail
                  index={item}
                  height={160}
                  width="100%"
                  className="rounded-md"
                />
                <div className="mt-4 w-3/4 h-3 bg-gray-200 rounded"></div>
                <div className="mt-4 w-3/4 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="mt-2 w-1/2 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="mt-2 w-1/2 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  //Error Handling ui
  if (error) {
    return (
      <div className="text-center mt-2">
        <Error />
      </div>
    );
  }
  //Main Render
  return (

    <section className="max-w-7xl mx-auto px-4 py-8">
      <h3 className="text-3xl font-semibold text-center text-gray-800  dark:text-white mb-8">
        {category ? `${category} Products` : "All Products"}
      </h3>
      <div className="w-full rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-8 mb-6">
        {/* Search Section  */}
        {/* <div className="flex-1"> */}
          {/* <SearchBar
            searchText={searchText}
            onSearch={applyFilters}
            ref={ref}
          /> */}
        {/* </div> */}
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
      {filterProducts.length > 0 ? (

        <div className={`${gridClasses} px-4 md:px-6 mt-4`}>
          {filterProducts?.map((item) => (
            <Card key={item.id} products={item}></Card>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-xl mt-10">
          No Products match your filters.
        </p>
      )}
    </section>
  );
}

export default ProductListing;