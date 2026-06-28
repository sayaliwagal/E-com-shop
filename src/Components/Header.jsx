import { NavLink, Link } from "react-router";
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
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar.jsx";

const Header = () => {
  // const [isLogedin, setIsLogedin] = useState(false);
  // const { wishList, const
  const { auth } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  // const navigate = useNavigate();
  const { user, logout } = useAuth();

  const cartItems = useSelector((state) => state.cart.items);
  const wishListItems = useSelector((state) => state.wishList.items);
  // console.log(cartItems);

  // const move = () => {
  //   if (isLogedin) {
  //     navigate("/blog");
  //   } else {
  //     navigate("/");
  //   }
  // };
  // const isOnline = useOnline();

  const naveLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];
  return (
    <header className="sicky top-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-10xl mx-auto px-4 lg:px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="">
              <img
                src={logo}
                alt="E-Commerce Logo"
                className="h-12 lg:h-14 w-auto object-contain"
              />
            </Link>
            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xs  h-10 ">
              <SearchBar />
            </div>
            {/*Right Section */}
            <div className="flex items-center gap-5">
              {/* Wishlist */}
              <NavLink
                to="/wishlist"
                className="relative p-2 rounded-full hover:bg-yellow-500 transition-colors"
              >
                <FaRegHeart size={20} />
                <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {wishListItems.length}
                </span>
              </NavLink>
              {/* Cart */}
              <NavLink
                to="/cart"
                className="relative p-2 rounded-full hover:bg-yellow-500 transition-colors"
              >
                <BsCart2 size={20} />
                <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </NavLink>
              <ThemeToggle />

              {/* User Authentication */}
              {!user ? (
                <div className="hidden md:flex items-center gap-2">
                  <Link
                    to="/login"
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div className="hidden lg:flex items-center gap-2">
                  <span className="font-medium truncate max-w-[140px]">
                    Hi, {user.name.split(" ")[0]}
                  </span>
                  <button
                    onClick={logout}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
              {/* Mobile Menu  */}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden">
                <GiHamburgerMenu size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Navigation Bar */}
      <div className="hidden lg:block bg-gray-700 text-white ">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex items-center gap-8 h-12 font-medium">
            <li className="flex items-center gap-2 cursor-pointer hover:text-yellow-400">
              <GiHamburgerMenu size={20} />
              categories
            </li>
            {naveLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400" : "hover:text-yellow-400"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Responsive Menu */}
      <ResponsiveMenu 
      open={open} 
      setOpen={setOpen}
      user={user}
      auth={auth}
      logout={logout} />
    </header>
  );
};

export default Header;
