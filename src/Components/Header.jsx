import { NavLink, useNavigate } from "react-router";
import logo from "../assets/e-com-logo.png";
import { useContext, useState } from "react";
import useOnline from "../Utils/useOnline";
import CartContext from "../Utils/Context/CartContext";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeToggle from "./ThemeToggle.jsx";

const Header = () => {
  const [isLogedin, setIsLogedin] = useState(false);
  const { cart, wishList, auth, logout } = useContext(CartContext);
  const [open, setOpen] = useState(false);
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
  const isOnline = useOnline();
  return (
    <div className="flex">
      <header className="bg-gray-800 text-white w-full shadow-md sticky top-0 z-40">
        <nav className="flex justify-between item-center px-5 py-4 md:px-12">
          <div className="flex w-full items-center justify-between gap-3">
            <img src={logo} alt="logo" className="h-20 w-auto" />
            {/* Desktop NavLink */}
            <ul className="hidden md:flex font-semibold text-xl gap-10">
              {["/", "/about", "/contact", "/blog"].map((path, i) => (
                <li key={i}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                        : "hover:text-purple-300"
                    }
                  >
                    {path === "/"
                      ? "Home"
                      : path.replace("/", "").charAt(0).toUpperCase() +
                        path.slice(2)}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Right Icons and Buttons */}
            <div className="flex items-center gap-3">
              <NavLink
                to={"/cart"}
                className="hover:bg-yellow-500 flex relative p-5  rounded-full  hover:text-slate-200"
              >
                <BsCart2 size={30} />
                <span className="absolute top-1 right-3 bg-red-500 text-white text-xs rounded-full px-2">
                  {cart.length}
                </span>
              </NavLink>
              <NavLink
                to={"/wishlist"}
                className="hover:bg-yellow-500 flex relative p-5  rounded-full  hover:text-slate-200"
              >
                <FaRegHeart size={30} />
                <span className="absolute top-1 right-3 bg-red-500 text-white text-xs rounded-full px-2">
                  {wishList.length}
                </span>
              </NavLink>
              <div className="mx-5">
              <ThemeToggle  />
              </div>
              {!auth && (
                <div className="hidden md:block hover:text-purple-300 hover:bg-yellow-600 border-yellow-500 text-xl bg-yellow-500 p-2 rounded-md font-semibold">
                  <NavLink to={"/login"}>Login</NavLink>
                </div>
              )}
              {auth && (
                <div className="hidden md:block hover:text-gray-200 hover:bg-red-600 border-red-500 text-xl bg-red-500 p-2 rounded-md font-semibold">
                  <button onClick={logout}>Logout</button>
                </div>
              )}
            </div>
          </div>
          {/* Responsive navbar */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden  mr-6 items-center"
          >
            <GiHamburgerMenu className="h-8 w-8 hover:text-gray-200" />
          </button>
        </nav>
      </header>
      <ResponsiveMenu
        className="xl:hidden"
        open={open}
        setOpen={setOpen}
        auth={auth}
        logout={logout}
      />
    </div>
  );
};

export default Header;
