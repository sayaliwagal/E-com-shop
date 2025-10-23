import { NavLink, useNavigate } from "react-router";
import logo from "../assets/e-com-logo.png";
import { useContext, useState } from "react";
import useOnline from "../Utils/useOnline";
import CartContext from "../Utils/Context/CartContext";

const Header = () => {
  const [isLogedin, setIsLogedin] = useState(false);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const login = () => {
    setIsLogedin(true);
  };

  const move = () => {
    if (isLogedin) {
      navigate("/blog");
    } else {
      navigate("/");
    }
  };
  const { auth, logout } = useContext(CartContext);
  const isOnline = useOnline();
  return (
    <div className="flex flex-wrap">
      <div className="relatuive mx-auto">
        <nav className="flex justify-between bg-gray-900 text-white w-screen">
          <img src={logo} alt="logo" style={{ height: "120px" }} />
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>{" "}
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={"/cart"}>
                Cart <span>{cart.length}</span>
              </NavLink>
            </li>
            {!auth && (
              <li>
                <NavLink to={"/login"}>Login</NavLink>
              </li>
            )}
            {auth && (
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
