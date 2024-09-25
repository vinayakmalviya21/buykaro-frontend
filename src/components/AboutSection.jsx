import React from "react";
import aboutImage from "../assets/images/aboutUs-image.jpg";

export default function AboutSection() {
  return (
    <div className="py-5 bg-gray-200">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600">
            Discover more about our mission, values, and the quality products we
            offer to make your shopping experience unforgettable.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 w-full p-4">
            <img
              src={aboutImage}
              alt="About Us"
              className="rounded-lg shadow-lg w-full max-w-xs md:max-w-md mx-auto"
            />
          </div>

          <div className="md:w-1/2 w-full p-4">
            <p className="text-left text-gray-700 text-lg mb-6">
              We are dedicated to providing high-quality products from top
              brands at unbeatable prices. Our team carefully curates our
              collection to bring you the best of fashion, electronics, home
              goods, and more. At our store, customer satisfaction is our top
              priority. We strive to offer an easy and enjoyable shopping
              experience, ensuring that you get exactly what you're looking for,
              when you need it.
            </p>

            <a
              href="/"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-600 transition duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
