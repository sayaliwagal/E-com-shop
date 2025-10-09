import { NavLink, useNavigate } from "react-router";
import logo from "../assets/e-com-logo.png"
import { useState } from "react";
import useOnline from "../Utils/useOnline";



const Header =({length}) => {

  const [isLogedin, setIsLogedin] = useState(false);
  const navigate = useNavigate();
  const login = () => {
    setIsLogedin(true);
  }

  const move = () => {
    if(isLogedin){
      navigate("/blog");
    }else{
      navigate("/")
    }
  }
const isOnline = useOnline();
  return (
    <nav className='nav'>
      <img src={logo} alt="logo" style={{height:"120px"}} />
      <ul>
          <li><NavLink to={"/"}>Home</NavLink> </li>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
          <li><NavLink to={"/blog"}>Blog</NavLink></li>
          <li><NavLink to={"/cart"} >Cart <span>{length}</span></NavLink></li>
      </ul>
    </nav>
  )
};

export default Header;