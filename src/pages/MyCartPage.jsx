import React, { useEffect, useState } from "react";
import fashionImage from "../assets/images/fashion-image.jpg";
import Swal from "sweetalert2";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/cart`, 
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, 
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }

        const data = await response.json();
        setCartItems(data.cartItems); 
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  // Function to calculate total price
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    .toFixed(2);

    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-2xl font-semibold">Loading categoties...</p>
            <div className="loader mt-4"></div>
          </div>
        </div>
      );
    }

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
                <li key={item._id} className="flex items-center border-b py-4">
                  <img
                    src={item.product.images[0] || fashionImage} 
                    alt={item.product.name}
                    className="w-28 h-20 object-cover rounded-lg mr-4"
                  />
                  <div className="flex-grow">
                    <h2 className="font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 mb-2">
                      {item.product.name}
                    </h2>
                    <p className="text-gray-600">
                      Price: Rs.{item.product.price.toFixed(2)}
                    </p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <span className="text-lg font-bold">
                    Total: Rs.{(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
              <h2 className="text-xl font-bold mb-2 sm:mb-0">
                Total Amount: Rs.{totalPrice}
              </h2>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                  Buy Now
                </button>
                <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-200">
                  <a href="/categoryList">Continue Shopping</a>
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
