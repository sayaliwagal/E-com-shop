import React from "react";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { button } from "motion/react-client";


const ResponsiveMenu = ({ open, setOpen, auth, logout, user }) => {
  const closeMenu = () => setOpen(false);
 
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 w-full h-[calc(100vh-5rem)] z-50 bg-gray-800 flex flex-col items-center justify-center"
        >
          <div className="text-xl font-semibold uppercase bg-gray-800 text-white py-10 rounded-3xl">
          
            <ul className="flex flex-col justify-center items-center gap-10">
                {user ?
              <span className="font-medium truncate max-w-[140px] text-center left-2.5">
                Hi, {user.name.split(" ")[0]}!
                </span>
                : <span className="font-medium truncate max-w-[140px]">Welcome!</span>
              }
              {["/", "/about", "/contact", "/blog"].map((path, i) => (
                <li key={i} onClick={closeMenu}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-400 border-b-2 border-yellow-400"
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
              <li>
                {!user ? (
                  <div className="flex flex-col gap-4 w-full px-6">
                      <NavLink
                    to="/login"
                    onClick={closeMenu}
                    className="bg-yellow-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-yellow-400"
                  >
                    Login
                  </NavLink>
                   <NavLink
                    to="/signup"
                    onClick={closeMenu}
                    className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
                  >
                    Sign Up
                  </NavLink>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                    className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-400"
                  >
                    Logout
                  </button>
                )}
              </li>
            </ul>
            {/* Login /Logout Button (Visible only on Moblie Menu) */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
