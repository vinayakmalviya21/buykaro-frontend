import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-700 h-screen">
      <div className="flex items-center justify-center h-full bg-black bg-opacity-60">
        <div className="text-center px-6 md:px-12">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-600 text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            <Typewriter
              words={["Discover Your Next Favorite Product"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>

          <p className="text-gray-200 text-lg md:text-2xl mb-8">
            Shop the best deals and latest trends at unbeatable prices.
          </p>
          <a href="/shop-now">
            <button className="bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-600 transition duration-300 shadow-lg transform hover:scale-105">
              Shop Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
