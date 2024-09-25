import React, { useState } from "react";
import fashionImage from "../assets/images/fashion-image.jpg";

const ProductDetailsPage = () => {
  const [pincode, setPincode] = useState("");
  const [deliveryMessage, setDeliveryMessage] = useState("");

  // Simulate delivery check based on pincode
  const checkDelivery = () => {
    if (pincode === "123456") {
      setDeliveryMessage(
        "Delivery available. Expected delivery: 3-5 business days."
      );
    } else {
      setDeliveryMessage("Sorry, delivery is not available for this pincode.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:px-24">
      {" "}
      {/* Adjust the container padding */}
      {/* Product image and title */}
      <div className="flex flex-col lg:flex-row items-start">
        {" "}
        {/* Align items to start */}
        {/* Product Image */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          {" "}
          {/* Smaller image column */}
          <img
            className="w-full h-auto rounded-lg object-contain" /* Use object-contain to control image size */
            src={fashionImage}
            alt="Dell Monitor"
          />
        </div>
        {/* Product Info */}
        <div className="w-full lg:w-2/3 lg:pl-12">
          {" "}
          {/* Larger info column */}
          <h1 className="text-3xl font-bold mb-2">
            DELL S Series 27" Full HD IPS Monitor
          </h1>
          <p className="text-lg mb-4 text-gray-600">
            DELL S Series 68.58 cm (27 inch) Full HD IPS Panel with 5-Years
            warranty, 99% sRGB, Low Blue Light technology, HDMI x2, Tilt
            adjustment, 3-sided Bezel-less Monitor (S2721HN / S2721HNM)
          </p>
          {/* Pricing */}
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-green-500">₹12,499</span>
            <span className="ml-4 text-gray-500 line-through">₹23,316</span>
            <span className="ml-2 text-green-500">(46% off)</span>
          </div>
          {/* Special offers */}
          <div className="mb-6">
            <p className="text-lg font-bold mb-2">Available Offers:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
              <li>Get extra 32% off (price inclusive of cashback/coupon)</li>
              <li>Buy Keyboard combo with Monitor and Get 5% Off</li>
            </ul>
          </div>
          {/* Warranty info */}
          <div className="mb-6">
            <p className="text-lg font-bold mb-2">Warranty:</p>
            <p className="text-gray-700">5 Years Warranty</p>
          </div>
          {/* Delivery Section */}
          <div className="mb-6">
            <p className="text-lg font-bold mb-2">Check Delivery Options:</p>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Enter Pincode"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                onClick={checkDelivery}
              >
                Check
              </button>
            </div>
            {deliveryMessage && (
              <p className="mt-4 text-gray-700">{deliveryMessage}</p>
            )}
          </div>
          {/* Buttons */}
          <div className="flex space-x-4 mb-6">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
              Add to Cart
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition">
              Buy Now
            </button>
          </div>
          {/* Additional Options */}
          <div className="mb-6">
            <p className="text-lg font-bold mb-2">Available Payment Options:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Credit/Debit Card</li>
              <li>Net Banking</li>
              <li>UPI</li>
              <li>Cash on Delivery</li>
            </ul>
          </div>
          {/* Return Policy */}
          <div className="mb-6">
            <p className="text-lg font-bold mb-2">Return Policy:</p>
            <p className="text-gray-700">
              This product is eligible for return within 10 days of delivery, in
              case of any manufacturing defect or damage.
            </p>
          </div>
        </div>
      </div>
      {/* Additional details */}
      <div className="mt-12 lg:pl-12">
        {" "}
        {/* Add padding on large screens */}
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 ">Product Details</h2>
        <p className="text-gray-700 mb-2">
          <strong>Screen Size:</strong> 27 inches
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Resolution:</strong> Full HD (1920 x 1080)
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Refresh Rate:</strong> 75 Hz
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Response Time:</strong> 4 ms
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Panel Type:</strong> IPS
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Connectivity:</strong> 2 x HDMI
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Special Features:</strong> AMD Free Sync, Low Blue Light
          technology, Tilt Adjustment, 3-sided Bezel-less design
        </p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
