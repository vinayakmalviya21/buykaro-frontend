import React, { useEffect, useState } from "react";
import fashionImage from "../assets/images/fashion-image.jpg";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa"; 

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      setLoading(true); 
  
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
        console.log(error);
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

  const handleRemoveFromCart = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/cart/remove/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to remove item from cart");
      }
      setCartItems(cartItems.filter((item) => item.product._id !== productId));
      Swal.fire({
        icon: "success",
        title: "Removed",
        text: "Product has been removed from the cart.",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-2xl font-semibold">Loading products in Carts...</p>
          <div className="loader mt-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        Shopping Cart
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {cartItems.length === 0 ? (
          <p className="text-center font-bold text-gray-500 h-96 flex items-center justify-center">Your cart is empty.</p>
        ) : (
          <div>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item._id}
                  className="flex flex-row items-start border-b py-4"
                >
                  <img
                    src={item.product.images[0] || fashionImage}
                    alt={item.product.name}
                    className="w-24 h-20 object-cover rounded-lg mb-2 sm:mb-0 sm:mr-4"
                  />
                  <div className="flex-grow">
                    <h2 className="font-semibold text-lg sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 mb-1">
                      {item.product.name}
                    </h2>
                    <p className="text-gray-600">
                      Price: Rs.{item.product.price.toFixed(2)}
                    </p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <span className="text-lg font-bold">
                      Total: Rs.
                      {(item.product.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      className="mt-2 sm:mt-0 sm:ml-4 text-red-500 hover:text-red-600"
                      onClick={() => handleRemoveFromCart(item.product._id)}
                    >
                      <FaTrash size={24} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-row justify-between items-center">
              <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-0">
                Total Amount: Rs.{totalPrice}
              </h2>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                  <a href="/buy-now">Buy Now</a>
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
