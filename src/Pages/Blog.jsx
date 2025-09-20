import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import SlideBar from '../Components/blog/SlideBar'

const Blog = () => {
  // useEffect(() => {
  //   document.title = "Blog Page"
  // }, [])
  return (
    <div>
      <h1>Its our Blgo page</h1>
      <div  style={{display: "flex", gap:"80px"}}>
      {/* Child Components */}
      <SlideBar />
      <Outlet />      
      </div>
    </div>
  )
}

export default Blog
