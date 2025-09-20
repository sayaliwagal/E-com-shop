import React from 'react'
import { Link } from 'react-router'

const SlideBar = () => {
  return (
    <div>
      <ul>
        <li><Link to={""}>Womens Fashion</Link></li>
        <li><Link to ={"mensfashion"}>Mens Fashion</Link></li>
        <li><Link to={"kidsfashion"}>Kids Fashion</Link></li>
      </ul>
    </div>
  )
}

export default SlideBar
