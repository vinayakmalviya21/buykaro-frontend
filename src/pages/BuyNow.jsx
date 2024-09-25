import React, { useState } from "react";
import fashionImage from "../assets/images/fashion-image.jpg";

const BuyNow = () => {
  const products = [
    {
      id: 1,
      name: "Amazing Product 1",
      price: 4999, // Price in INR
      description: "This is an amazing product that you will love!",
      image: fashionImage,
    },
    {
      id: 2,
      name: "Amazing Product 2",
      price: 5999, // Price in INR
      description: "This is another fantastic product for you!",
      image: fashionImage,
    },
    {
      id: 3,
      name: "Amazing Product 3",
      price: 3999, // Price in INR
      description: "You'll absolutely love this amazing product!",
      image: fashionImage,
    },
  ];

  const [quantities, setQuantities] = useState(products.map(() => 1)); // Initialize quantity for each product
  const [address, setAddress] = useState("");
  const [offer, setOffer] = useState("");
  const [discount, setDiscount] = useState(0);

  // Calculate total amount
  const totalAmount = products.reduce(
    (acc, product, index) => acc + product.price * quantities[index],
    0
  );

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(0, value); // Ensure quantity is at least 0
    setQuantities(newQuantities);
  };

  const handleOfferChange = (e) => {
    setOffer(e.target.value);
    if (e.target.value === "DISCOUNT10") {
      setDiscount(500); // Example discount in INR
    } else {
      setDiscount(0);
    }
  };

  const handlePayNow = () => {
    if (!address) {
      alert("Please enter your address.");
      return;
    }
    alert(
      `Payment of ₹${(totalAmount - discount).toFixed(
        2
      )} processed for ${address}`
    );
  };

  return (
    <div className="flex justify-center">
      <div className="container p-6 max-w-6xl flex flex-col md:flex-row gap-8">
        
        {/* Product Section */}
        <div className="w-full md:w-3/5">
              <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-8 flex justify-center">Buy Now</h2>

          <div className="flex flex-col space-y-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="p-4 border-2 rounded-lg shadow-md flex flex-col md:flex-row items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full md:w-1/4 h-40 object-cover rounded-lg mb-4 md:mb-0"
                />
                <div className="md:ml-6 flex-grow text-center md:text-left">
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <span className="text-lg font-bold block mb-4">
                    Price: ₹{product.price.toFixed(2)}
                  </span>

                  <div className="mb-4 flex items-center justify-center md:justify-start">
                    <label className="block mb-1 mr-2">Quantity:</label>
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button
                        onClick={() =>
                          handleQuantityChange(index, quantities[index] - 1)
                        }
                        className="bg-gray-200 px-3 py-1 text-lg"
                        disabled={quantities[index] <= 0}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={quantities[index]}
                        readOnly
                        className="w-12 text-center border-none outline-none p-1"
                      />
                      <button
                        onClick={() =>
                          handleQuantityChange(index, quantities[index] + 1)
                        }
                        className="bg-gray-200 px-3 py-1 text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pay Now Section */}
        <div className="w-full md:w-2/5 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 mb-2 text-center">Order Summary</h2>

          <div className="mb-4">
            <label className="block mb-1 text-start">Address:</label>
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
            <label className="block mb-1 text-start">Offer Code:</label>
            <input
              type="text"
              value={offer}
              onChange={handleOfferChange}
              className="border rounded w-full p-2"
              placeholder="Enter offer code"
            />
          </div>

          <div className="mb-4 text-start">
            <span className="block mb-1 font-bold">Discount: ₹{discount}</span>
            <span className="block mb-1 font-bold">
              Total Amount to Pay: ₹{(totalAmount - discount).toFixed(2)}
            </span>
          </div>

          <div className="text-center">
            <button
              onClick={handlePayNow}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-200"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
