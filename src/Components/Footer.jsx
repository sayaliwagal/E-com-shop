import React from "react";
import { Link } from "react-router";
import { titles } from "../constant";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-300">Product Hub</h3>
            <p className="text-gray-400 text-sm">
              Your one-stop destination for quality products and seamless shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-medium mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {Object.entries(titles).filter(([path]) => 
              !path.includes(":") && path !== "/*").map(([path, label]) => (
                 <li key={path}>
                  <Link 
                    to={path} 
                    className="text-gray-400 hover:text-indigo-300 text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-md font-medium mb-4 text-white">Contact Us</h4>
            <address className="text-gray-400 text-sm not-italic">
              <p>123 Product Street</p>
              <p>Tech City, TC 10001</p>
              <p className="mt-2">Email: info@producthub.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-md font-medium mb-4 text-white">Stay Updated</h4>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
              />
              <button 
                type="submit" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-2 md:mb-0">
            © {new Date().getFullYear()} Product Hub. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {['Privacy Policy', 'Terms of Service', 'FAQ'].map((item) => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase().replace(' ', '-')}`} 
                className="text-gray-500 hover:text-indigo-300 text-xs transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;