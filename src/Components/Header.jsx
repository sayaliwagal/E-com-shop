import { NavLink /*, useNavigate*/ } from "react-router";
import logo from "../assets/e-com-logo.png";
import { useContext, useState } from "react";
// import useOnline from "../Utils/useOnline";
import CartContext from "../Utils/Context/CartContext";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeToggle from "./ThemeToggle.jsx";
import { useAuth } from "../Utils/Context/AuthContext.jsx";
import { Link } from "react-router";

const Header = () => {
  // const [isLogedin, setIsLogedin] = useState(false);
  const { cart, wishList, auth } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  // const navigate = useNavigate();
const { user, logout } = useAuth();

  // const move = () => {
  //   if (isLogedin) {
  //     navigate("/blog");
  //   } else {
  //     navigate("/");
  //   }
  // };
  // const isOnline = useOnline();
  return (
    <div className="flex">
      <header className="bg-gray-800 text-white w-full shadow-md sticky top-0 z-40">
        <nav className="flex justify-between item-center px-5 py-4 md:px-12">
          <div className="flex w-full items-center justify-between gap-3">
            <img src={logo} alt="logo" className="h-20 w-auto" />
            {/* Desktop NavLink */}
            <ul className="hidden lg:flex font-semibold text-xl gap-10">
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
            <div className="flex items-center gap-3 md:justify-around">
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
              <div className="mx-9">
              <ThemeToggle/>
              </div>
              {!user ? (
                <>
                <Link 
                to= "/login"
                className="px-4 py-2 border rounded">
                  Login
                </Link>
                <Link 
                to= "/signup"
                className="px-4 py-2 bg-yellow-500 rounded ">
                  Signup
                </Link>
                  </>
              ): (
                <>
                <span className="font-semibold">
                  Hi, {user.name}
                </span>
                <button
                 onClick={logout}
                 className="px-4 py-2 border rounded">
                    Logout
                 </button>
                </>
              )}
            </div>
          </div>
          {/* Responsive navbar */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden  mr-2 items-center"
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
