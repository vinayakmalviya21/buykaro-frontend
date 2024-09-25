import React, { useState } from "react";
import {
  FiUser,
  FiMenu,
  FiShoppingCart,
  FiX,
  FiHome,
  FiPackage,
  FiPhone,
} from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/60 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">buyKaro</h1>
            </div>

            <div className="hidden sm:flex sm:items-center">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="relative text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="relative text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                >
                  Products
                </a>

                <a
                  href="#"
                  className="relative text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="relative text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                >
                  Cart <FiShoppingCart className="inline h-5 w-5" />
                </a>
                {!isLoggedIn ? (
                  <button 
                  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-600 transition duration-300 transform hover:scale-105"
                  >
                    Sign In
                  </button>
                ) : (
                  <FaUserCircle className="h-8 w-8 text-gray-700 cursor-pointer" />
                )}
              </div>
            </div>

            <div className="flex sm:hidden">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isSidebarOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-white z-50 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-2xl font-bold text-blue-600">buyKaro</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-black hover:text-gray-600 focus:outline-none"
            >
              <FiX className="h-8 w-8" />
            </button>
          </div>

          <div className="mt-8 space-y-4 text-black">
            <a
              href="#"
              className="flex items-center space-x-2 px-4 py-2 text-lg font-medium hover:bg-gray-100"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FiHome className="h-5 w-5 text-blue-600" />
              <span>Home</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 px-4 py-2 text-lg font-medium hover:bg-gray-100"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FiPackage className="h-5 w-5 text-green-600" />{" "}
              <span>Products</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 px-4 py-2 text-lg font-medium hover:bg-gray-100"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FiPhone className="h-5 w-5 text-red-600" />{" "}
              <span>Contact Us</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 px-4 py-2 text-lg font-medium hover:bg-gray-100"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FiShoppingCart className="h-5 w-5 text-orange-600" />{" "}
              <span>Cart</span>
            </a>

            {!isLoggedIn ? (
              <button className="ml-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-600 transition duration-300 transform hover:scale-105">
                Sign In
              </button>
            ) : (
              <FaUserCircle className="h-10 w-10 text-gray-700 mx-auto cursor-pointer" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
