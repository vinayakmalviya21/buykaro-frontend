import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-gray-800">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/" className="text-gray-700 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-700 hover:text-blue-600">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-gray-800">Contact Us</h2>
            <p className="mt-2 text-gray-600">Email: support@buykaro.com</p>
            <p className="text-gray-600">Phone: +91-9047829308</p>
          </div>

          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold text-gray-800">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <FiFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <FiInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <FiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} buyKaro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
