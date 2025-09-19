import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx'
import Blog from './Pages/Blog.jsx'
import Error from './Pages/Error.jsx'
import ProductDescp from './Pages/ProductDescp.jsx';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import {titles} from "./constant.js"


   const DynamicTitle = () => {
    const location = useLocation();
    console.log(location);
     useEffect(() =>{
      document.title = titles[location.pathname];
     },[location.pathname])
   return null;
   }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <DynamicTitle />
    <Header />
     <Routes>
      {/* Static route */}
      <Route path="/" element = {<App/>}/>
      <Route path="/about" element = {<About />}/>
      <Route path="/contact" element = {<Contact />}/>
      <Route path='/blog' element= {<Blog/>} />
      {/* Dynamic route */}
      <Route path='/products/:title/:id' element ={<ProductDescp/>}></Route>
      <Route path='/*' element={<Navigate to={"/"}/>}/>
     </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
