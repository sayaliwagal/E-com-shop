import React from 'react';
import Hero from '../Components/Hero.jsx';
import CategorySection from '../Components/CategorySection.jsx';
import { useProducts } from "../Utils/Context/ProductContext.jsx";


const Home = () => {
 const { products, loading  } = useProducts();

//  console.log("PRODUCT DATA:", products);


 if(loading) return null;

 const data = products || [];

 //group by category 
 const grouped = data.reduce((acc, item) => {
  acc[item.category] = acc[item.category] || [];
  acc[item.category].push(item);
  return acc;
 }, {});

  return (
    <div>
      <Hero />
      {Object.entries(grouped).slice(0,4).map(([category, items])=>(
        <CategorySection 
        key={category}
        title={category}
        category={category}
        products={items.slice(0,4)}
        />
      ))}
      
    </div>
  )
}

export default Home
