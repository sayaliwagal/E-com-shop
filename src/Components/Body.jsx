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
    ref.current.style.backgroundColor ="gray"
  }
  useEffect(() => {
     handleRef();
  }, [])
  // console.log(ref);
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
