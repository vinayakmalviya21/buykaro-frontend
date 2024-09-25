import React from "react";
import fashionImage from "../assets/images/fashion-image.jpg";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      quantity: 1,
      image: fashionImage,
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      quantity: 1,
      image: fashionImage,
    },
    {
      id: 3,
      name: "Product 3",
      price: 49.99,
      quantity: 1,
      image: fashionImage,
    },
  ];

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 ">
        Shopping Cart
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center border-b py-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg mr-4"
                  />
                  <div className="flex-grow">
                    <h2 className="font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 mb-2">
                      {item.name}
                    </h2>
                    <p className="text-gray-600">
                      Price: Rs.{item.price.toFixed(2)}
                    </p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <span className="text-lg font-bold">
                    Total: Rs.{(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
              <h2 className="text-xl font-bold mb-2 sm:mb-0">
                Total Amount: Rs.{totalPrice}
              </h2>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                  Buy Now
                </button>
                <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-200">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
