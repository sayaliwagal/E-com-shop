import { Link } from "react-router";
import { Card } from "./Card";
import { useEffect, useRef, useState } from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";
import { filterValues } from "../Utils/helper";
import useCallApi from "../Utils/useCallApi";
import { IoSearchSharp } from "react-icons/io5";
const Body = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);


  const data = useCallApi("https://dummyjson.com/products?limit=0");

  
  //useeffect for api fetching
  useEffect(() => {
    setProducts(data.products);
    setFilterProducts(data.products);
    setLoading(false);
    console.log(data.products);
  }, [data]);

  const ref = useRef("");
 const  handleRef = () => {
    ref.current.focus();
    // ref.current.style.backgroundColor ="gray"
  }
  useEffect(() => {
     handleRef();
  }, [])
  // console.log(ref);
  return (
    <>
      <h3 className="h3">Products List</h3>
      <div className="flex rounded-full border-2 border-gray-500 overflow-hidden max-w-md mx-auto">
      <input
        type="search"
        placeholder="Search Here...."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        ref={ref}
        className="w-full outline-none bg-gray-400 text-xl font-bold text-white px-5 py-3"
      />
      <button
        onClick={() => {
          setFilterProducts(filterValues(products, searchText));
        }}
        className="flex items-center rounded-r-full justify-center bg-gray-600 hover:bg-gray-700 px-6 text-slate-50"
      >
       <IoSearchSharp size={30} />
      </button>
      </div>

      <div className="main-card">
        {loading? (
          <>
            <div className="main-card">
              {Array.from({ length: 30 }).map((item,index) => {
                return (
                  <ShimmerThumbnail key={index} index={item} height={300} width={250} />
                );
              })}
            </div>
          </>
        ) : (
          filterProducts?.map((item) => {
            return (
                <Card key ={item.id} products={item}>
                  {/* <p>hello</p> */}
                </Card>
                
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
