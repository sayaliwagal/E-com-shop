import { React, lazy,Suspense, useState}  from 'react';
import App from '../App.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx'
import Cart from './Cart.jsx'
// import Blog from '/Blog.jsx'
const Blog = lazy(() =>(import("./Blog.jsx")))
// import Error from '/Error.jsx'
import ProductDescp from './ProductDescp.jsx';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Women from '../Components/blog/Women.jsx';
import Mens from '../Components/blog/Mens.jsx';
import Kids from '../Components/blog/Kids.jsx';
import {  Routes, Route, Navigate } from 'react-router';


const Layout = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (products) => {
    console.log("Data Added")
    setCart([...cart, products]);
  }
  
  return (
    <>
     <Header length = {cart.length} />
     <Routes>
      {/* Static route */}
      <Route path="/" element = {<App addToCart ={addToCart}/>}/>
      <Route path="/about" element = {<About />}/>
      <Route path="/contact" element = {<Contact />}/>
      <Route path="/cart" element = {<Cart cart={cart} />}/>
      <Route path='/blog' element= {<Suspense fallback={<h2> Loadding....</h2>}><Blog/></Suspense>}>
      {/* Nested Routes */}
      <Route path='' index element= {<Women />}/>
      <Route path='mensfashion' element= {<Mens />}/>
      <Route path='kidsfashion' element= {<Kids/>}/>
      </Route>
      {/* Dynamic route */}
      <Route path='/products/:title/:id' element ={<ProductDescp/>}></Route>
      <Route path='/*' element={<Navigate to={"/"}/>}/>
     </Routes>
      <Footer /> 
    </>
  )
}

export default Layout
