import { Link } from "react-router";
import { Card } from "./Card";
import { useEffect, useRef, useState } from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";
import { filterValues } from "../Utils/helper";
import useCallApi from "../Utils/useCallApi";
import SearchBar from "./searchBar";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);


  const data = useCallApi("https://dummyjson.com/products?limit=0");

  
// new Set(data.products.map((item) =>{
//       return item.category;
//     }))  //useeffect for api fetching
  useEffect(() => {
    setProducts(data.products);
    setFilterProducts(data.products);
    setLoading(false);
  //  const uniqueCategories = [
  //   "All",
  //   ...
  //  ]
  //  setCategories(uniqueCategories);
  }, [data]);

  const applyFilters = () => {
    let filtered = filterValues(products, searchText);
    setFilterProducts(filtered);
  }
  useEffect(() =>{
    applyFilters();
  }, [searchText])
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
        <SearchBar  searchText={searchText} setSearchText={setSearchText} onSearch={applyFilters} ref={ref}/>
      
              <div>
           <select 
           // value={selectedCategory}
           onChange={(e) => setSelectedCategory(e.target.value)}
           className="border-2 border-blue-400 px-4 py-2 rounded-lg font-semibold">
             
           </select>
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
