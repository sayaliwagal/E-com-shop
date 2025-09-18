import { NavLink } from "react-router";
import logo from "../assets/e-com-logo.png"


const Header =() => {
  return (
    <nav className='nav'>
      <img src={logo} alt="logo" style={{height:"120px"}} />
      <ul>
          <li><NavLink to={"/"}>Home</NavLink> </li>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
          <li><NavLink to={"/blog"}>Blog</NavLink></li>
      </ul>
    </nav>
  )
};

export default Header;