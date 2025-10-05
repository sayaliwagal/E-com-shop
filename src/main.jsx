import { lazy, StrictMode, useEffect ,Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx'
// import Blog from './Pages/Blog.jsx'
const Blog = lazy(() =>(import("./Pages/Blog.jsx")))
import Error from './Pages/Error.jsx'
import ProductDescp from './Pages/ProductDescp.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Women from './Components/blog/Women.jsx';
import Mens from './Components/blog/Mens.jsx';
import Kids from './Components/blog/Kids.jsx';
import DynamicTitle from './Components/DynamicTitle.jsx';


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
    </BrowserRouter>
  </StrictMode>,
)
