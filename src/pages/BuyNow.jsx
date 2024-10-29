import React, { useEffect, useState } from "react";
import fashionImage from "../assets/images/fashion-image.jpg";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const BuyNowPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate();

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

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    .toFixed(2);

  const handlePurchase = async () => {
    if (!address || !city || !postalCode || !country || !mobileNumber) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please fill in all required fields.",
      });
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/order`, 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
          body: JSON.stringify({
            orderItems: cartItems.map((item) => ({
              product: item.product._id,
              quantity: item.quantity,
              price: item.product.price,
            })),
            shippingAddress: { address, city, postalCode, country },
            totalPrice: parseFloat(totalPrice), 
            mobileNumber, 
          }),
        }
      );
    
      if (!response.ok) {
        const errorData = await response.json(); 
        throw new Error(errorData.message || "Failed to place order");
      }
    
      Swal.fire({
        icon: "success",
        title: "Purchase Successful",
        text: "Your order has been placed!",
      }).then(() => {
        navigate("/my-orders");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Order Failed",
        text: error.message,
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-2xl font-semibold">Loading products...</p>
          <div className="loader mt-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row">
      <div className="flex-grow">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">
          Buy Now
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
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
                    <h2 className="font-semibold text-lg sm:text-xl mb-1 text-blue-600">
                      {item.product.name}
                    </h2>
                    <p className="text-gray-600">
                      Price: ₹{item.product.price.toFixed(2)}
                    </p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="md:w-1/3 md:ml-6 mt-6 md:mt-0">
        <h2 className="text-2xl font-bold text-purple-800">
          Billing Summary
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <form className="flex flex-col ">
            <label className="text-sm font-semibold mb-1" htmlFor="address">
              Address:
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              rows="3"
              className="border rounded-lg p-2 mb-4"
              placeholder="Enter your address"
            />
            <label className="text-sm font-semibold mb-1" htmlFor="city">
              City:
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="border rounded-lg p-2 mb-4"
              placeholder="Enter your city"
            />
            <label className="text-sm font-semibold mb-1" htmlFor="postalCode">
              Postal Code:
            </label>
            <input
              type="text"
              id="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
              className="border rounded-lg p-2 mb-4"
              placeholder="Enter your postal code"
            />
            <label className="text-sm font-semibold mb-1" htmlFor="country">
              Country:
            </label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              className="border rounded-lg p-2 mb-4"
              placeholder="Enter your country"
            />
            <label className="text-sm font-semibold mb-1" htmlFor="mobile">
              Mobile Number:
            </label>
            <input
              type="tel"
              id="mobile"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
              className="border rounded-lg p-2 mb-4"
              placeholder="Enter your mobile number"
            />
            <h3 className="text-lg font-semibold mb-2">Total Amount:</h3>
            <p className="text-xl font-bold text-blue-600">₹ {totalPrice}</p>
            <button
              type="button"
              onClick={handlePurchase}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 my-2"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyNowPage;
