import { NavLink, useNavigate } from "react-router";
import logo from "../assets/e-com-logo.png"
import { useState } from "react";



const Header =() => {

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
  console.log(isLogedin)
  return (
    <nav className='nav'>
      <img src={logo} alt="logo" style={{height:"120px"}} />
      <ul>
          <li><NavLink to={"/"}>Home</NavLink> </li>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
          <li><NavLink to={"/blog"}>Blog</NavLink></li>
          <li><button onClick={login}>Login</button></li>
          <li><button onClick={move}>Move</button></li>
      </ul>
    </nav>
  )
};

export default Header;