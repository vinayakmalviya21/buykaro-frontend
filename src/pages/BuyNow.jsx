import React, { useState } from "react";
import fashionImage from "../assets/images/fashion-image.jpg";

const BuyNow = () => {
  const product = {
    id: 1,
    name: "Amazing Product",
    price: 49.99,
    description: "This is an amazing product that you will love!",
    image: fashionImage,
  };

  const [address, setAddress] = useState("");
  const [offer, setOffer] = useState("");
  const [discount, setDiscount] = useState(0);
  const [amountToPay, setAmountToPay] = useState(product.price);

  const handleOfferChange = (e) => {
    setOffer(e.target.value);
    // Calculate discount based on the offer entered
    if (e.target.value === "DISCOUNT10") {
      setDiscount(10); // Example discount
    } else {
      setDiscount(0);
    }
  };

  const handlePayNow = () => {
    if (!address) {
      alert("Please enter your address.");
      return;
    }
    // Add functionality to handle payment processing
    alert(
      `Payment of $${(amountToPay - discount).toFixed(
        2
      )} processed for ${address}`
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Buy Now</h1>
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row">
        <img
          src={product.image}
          alt={product.name}
          className="w-1/3 rounded-lg mb-4 md:mb-0"
        />
        <div className="md:ml-6 w-full md:w-2/3">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <span className="text-lg font-bold mb-4 block">
            Price: ${product.price.toFixed(2)}
          </span>

          <div className="mb-4">
            <label className="block mb-1">Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border rounded w-full p-2"
              placeholder="Enter your address"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Offer Code:</label>
            <input
              type="text"
              value={offer}
              onChange={handleOfferChange}
              className="border rounded w-full p-2"
              placeholder="Enter offer code"
            />
          </div>

          <div className="mb-4">
            <span className="block mb-1 font-bold">Discount: ${discount}</span>
            <span className="block mb-1 font-bold">
              Total Amount to Pay: ${(amountToPay - discount).toFixed(2)}
            </span>
          </div>

          <button
            onClick={handlePayNow}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-200"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
