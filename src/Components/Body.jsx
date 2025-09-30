import { Link } from "react-router";
import { Card } from "./Card";
import { useEffect, useRef, useState } from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";
import { filterValues } from "../Utils/helper";
import useCallApi from "../Utils/useCallApi";
// import useOnline from "../Utils/useOnline";
const Body = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchText, setSearchText] = useState("");


  const data = useCallApi("https://dummyjson.com/products");

  //useeffect for api fetching
  useEffect(() => {
    setProducts(data.products);
    setFilterProducts(data.products);
  }, [data]);

  const ref = useRef("");
 const  handleRef = () => {
    ref.current.focus();
    ref.current.style.backgroundColor ="gray"
  }
  useEffect(() => {
     handleRef();
  }, [])
  console.log(ref);
  return (
    <>
      <h3 className="h3">Products List</h3>
      <input
        type="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        ref={ref}
      />
      <button
        onClick={() => {
          setFilterProducts(filterValues(products, searchText));
        }}
      >
        Search
      </button>
      <div className="main-card">
        {filterProducts?.length == 0 ? (
          <>
            <div className="main-card">
              {Array.from({ length: 30 }).map((item) => {
                return (
                  <ShimmerThumbnail index={item} height={300} width={250} />
                );
              })}
            </div>
          </>
        ) : (
          filterProducts?.map((item, index) => {
            return (
              <Link
                to={`/products/${item.title.split(" ").join("-")}/${item.id}`}
                key={item.id}
              >
                <Card products={item} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
