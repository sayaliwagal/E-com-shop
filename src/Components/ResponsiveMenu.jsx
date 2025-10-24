import React from "react";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "motion/react";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-gray-800 text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
