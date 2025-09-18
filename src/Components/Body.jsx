import {Card} from './Card';
import { useEffect, useState } from 'react';
const Body = () => {

  const [products, setProducts] = useState([]);  
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  const filterValues = () => {
    const filterProduct = products.filter((value, i) => {
      return value.title.toLowerCase().includes(searchText.toLowerCase());
      
    });
    setFilterProducts(filterProduct);
    
  };
  //  Function to fetch api 
      const apiCall =  async() => {
        const responce = await fetch("https://fakestoreapi.com/products")
        const data = await responce.json();
        console.log(data);
        setProducts(data)
        setFilterProducts(data);
      }
  //useeffect for api fetching 
  useEffect(
    () => {
      apiCall()
    },
  []);
  return (
    <>
      <h3 className='h3'>Products List</h3>
      <input type="search" value={searchText} onChange={(e) =>setSearchText(e.target.value)} />
      <button onClick={filterValues}>Search</button>
      <div className="main-card">
          {
            filterProducts.length == 0 ? <h1>Data not Found, Pleasse try somting else!...</h1>
            :
              filterProducts.map((item, index) => {
                return(
                        <Card products = {item} key={item.id} />
                      )
              }) 
          }
      </div>
    </>
  )
};
export default Body;