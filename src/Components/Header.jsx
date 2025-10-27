import { NavLink, useNavigate } from "react-router";
import logo from "../assets/e-com-logo.png";
import { useContext, useState } from "react";
import useOnline from "../Utils/useOnline";
import CartContext from "../Utils/Context/CartContext";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isLogedin, setIsLogedin] = useState(false);
  const { cart, wishList } = useContext(CartContext);
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
  const { auth, logout } = useContext(CartContext);
  const isOnline = useOnline();
  return (
    <div className="flex">
      <div className="relative mx-auto overflow-x-hidden">
        <nav className="flex justify-between bg-gray-800 text-white w-screen">
          <div className="px-5 xl:px-12  flex w-full items-center justify-between">
            <img src={logo} alt="logo" style={{ height: "100px" }} />
            <ul className="hidden md:flex px-6 mx-auto font-semibold text-xl space-x-12">
              <li className="cursor-pointer">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-600 font-bold border-b-3 border-yellow-600"
                      : "text-slate-100-600 hover:text-purple-300"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-600 font-bold border-b-3 border-yellow-600"
                      : "text-slate-100-600 hover:text-purple-300"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-600 font-bold border-b-3 border-yellow-600"
                      : "text-slate-100-600 hover:text-purple-300"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink
                  to={"/blog"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-600 font-bold border-b-3 border-yellow-600"
                      : "text-slate-100-600 hover:text-purple-300"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
            <div className="flex items-center space-x-5 ">
              <NavLink
                to={"/cart"}
                className="hover:bg-yellow-500 flex relative p-5  rounded-full  hover:text-slate-200"
              >
                <BsCart2 size={30} />{" "}
                <span className="absolute -top-1 left-9 text-red-600 font-semibold text-xl">
                  {cart.length}
                </span>
              </NavLink>
                        <NavLink
                to={"/wishlist"}
                className="hover:bg-yellow-500 flex relative p-5  rounded-full  hover:text-slate-200"
              >
                <FaRegHeart size={30} />
                <span className="absolute -top-1 left-9 text-red-600 font-semibold text-xl">
                  {wishList.length}
                </span>
              </NavLink>
              {!auth && (
                <div className="hover:text-purple-300 hover:bg-amber-500 border-amber-500 text-xl bg-yellow-600 p-2 rounded-md font-semibold">
                  <NavLink to={"/login"}>Login</NavLink>
                </div>
              )}
              {auth && (
                <div className="hover:text-gray-200 hover:bg-red-600 border-red-500 text-xl bg-red-500 p-2 rounded-md font-semibold">
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
      </div>
      <ResponsiveMenu className="xl:hidden" open={open} setOpen={setOpen} />
    </div>
  );
};

export default Header;
