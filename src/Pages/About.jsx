import React, { useEffect, useState, lazy, Suspense } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
const OurStory = lazy(() => import("../Components/OurStory"))


const About = () => {
  // useEffect(() =>{
  //   document.title = "About Page"
  // },[]);
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Its About Page</h1>
      <button onClick={() => setShow(true)
      }>view About us </button>
      {show?<Suspense fallback={<h3>Loadding data ....</h3>}><OurStory /></Suspense>:<h3>Clike on button</h3>}
    </div>
  )
}

export default About
