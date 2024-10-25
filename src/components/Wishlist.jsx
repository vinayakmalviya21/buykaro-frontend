import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState({}); 

  // Function to fetch a product from the wishlist
  const fetchWishlist = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/wishlist`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok)
        throw new Error(
          "Failed to fetch wishlist. Please login again to show wishlist."
        );
      const data = await response.json();

      if (data.cartItems) {
        setWishlistItems(data.cartItems);
        const initialQuantities = {};
        data.cartItems.forEach((item) => {
          initialQuantities[item.product._id] = 1; 
        });
        setQuantities(initialQuantities); 
      } else {
        setWishlistItems([]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to delete a product from the wishlist
  const removeFromWishlist = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/wishlist/remove/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok)
        throw new Error("Failed to remove product from wishlist");

      Swal.fire({
        icon: "success",
        title: "Removed",
        text: "Product removed from wishlist!",
      });

      fetchWishlist();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message,
      });
    }
  };

  // Function to add item to cart
  const addToCart = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      const quantity = quantities[productId];
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/cart/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ productId, quantity }), 
        }
      );

      if (!response.ok) throw new Error("Failed to add product to cart");

      Swal.fire({
        icon: "success",
        title: "Added to Cart",
        text: "Product has been added to your cart!",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message,
      });
    }
  };

  // Handle quantity change
  const handleQuantityChange = (productId, change) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change), 
    }));
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
      <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-4 text-center">
        Your Wishlist
      </h2>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-700 text-center">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-6">
          {wishlistItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 p-2 border-b"
            >
              <Link to={`/product/${item.product._id}`}>
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-32 h-24 sm:w-28 sm:h-20 object-cover rounded-lg cursor-pointer"
                />
              </Link>
              <div className="flex-grow text-start sm:text-left">
                <Link to={`/product/${item.product._id}`}>
                  <h3 className="text-lg sm:text-xl font-bold cursor-pointer hover:text-purple-500 transition">
                    {item.product.name}
                  </h3>
                </Link>
                <p className="text-gray-800 text-lg font-normal">
                  ₹{item.product.price}
                </p>
              </div>
              <div className="flex items-center space-x-2 justify-center sm:justify-end">
                <button
                  className="bg-gray-300 p-2 rounded-md"
                  onClick={() => handleQuantityChange(item.product._id, -1)}
                >
                  -
                </button>
                <span className="text-lg">
                  {quantities[item.product._id] || 1}
                </span>
                <button
                  className="bg-gray-300 p-2 rounded-md"
                  onClick={() => handleQuantityChange(item.product._id, 1)}
                >
                  +
                </button>
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
                  onClick={() => addToCart(item.product._id)}
                >
                  Add to Cart
                </button>
                <button
                  className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition"
                  onClick={() => removeFromWishlist(item.product._id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
