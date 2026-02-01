import { React, lazy,Suspense, useState}  from 'react';
import App from '../App.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx'
import Cart from './Cart.jsx'
import Checkout from './Checkout.jsx'
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
import LoginPage from './LoginPage.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import WishList from './WishList.jsx';
import Error from './Error.jsx';
import OrderSuccess from './OrderSuccess.jsx';



const Layout = () => {
  //lift search 
   const [searchText, setSearchText] = useState("");
   
  return (
    <>
     <Header searchText={searchText} setSearchText={setSearchText}/>

     <Routes>
      {/* Static route */}
      <Route path="/" element = {<App searchText={searchText} />}/>
      <Route path="/category/:category" element={<App searchText={searchText} />} />
      <Route path="/about" element = {<About />}/>
      <Route path="/contact" element = {<Contact />}/>
      <Route path="/cart" element = {<ProtectedRoute><Cart/></ProtectedRoute>}/>
      <Route path="/wishlist" element = {<ProtectedRoute><WishList /></ProtectedRoute>}/>
      <Route path="/checkout" element ={<ProtectedRoute><Checkout /></ProtectedRoute>}></Route>
      <Route path='/blog' element= {<Suspense fallback={<h2> Loadding....</h2>}><Blog/></Suspense>}>
      {/* Nested Routes */}
      <Route path='' index element= {<Women />}/>
      <Route path='mensfashion' element= {<Mens />}/>
      <Route path='kidsfashion' element= {<Kids/>}/>
      </Route>
      {/* Dynamic route */}
      <Route path='/products/:title/:id' element ={<ProductDescp/>}></Route>
      <Route path='/order-success' element ={<OrderSuccess/>}></Route>
      <Route path='/login' element ={<LoginPage />}></Route>
      <Route path='/*' element={<Error />} />
     </Routes>
      <Footer /> 
    </>
  )
}

export default Layout
