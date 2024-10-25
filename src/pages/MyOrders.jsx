import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/order`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const fetchedOrders = await response.json();
      setOrders(fetchedOrders);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch order details",
      });
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []); 

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-2xl font-semibold">Loading orders...</p>
          <div className="loader mt-4"></div>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-2xl font-semibold">No orders found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">My Orders</h1>
      <div className="space-y-6">
        {orders.map((order) => {
          const {
            shippingAddress,
            orderItems = [],
            isDelivered,
            isPaid,
            totalPrice,
          } = order;
          const address = shippingAddress
            ? `${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.postalCode}, ${shippingAddress.country}`
            : "Address not available";

          return (
            <div
              key={order._id}
              className="bg-white shadow-lg rounded-lg p-6 md:flex items-start gap-4"
            >
              <div className="w-full md:w-3/4 mt-4 md:mt-0">
                <h2 className="text-lg font-semibold text-purple-700">
                  Order ID: {order._id}
                </h2>
                <p className="text-gray-700">
                  User:{" "}
                  <span className="text-indigo-500">{order?.user?.name}</span>
                </p>
                <p className="text-gray-700">
                  Address: <span className="text-green-600">{address}</span>
                </p>
                <p className="text-gray-700">
                    Delivery Status:{" "}
                  <span
                    className={
                      isDelivered === "Delivered"
                        ? "text-green-500"
                        : "text-yellow-600"
                    }
                  >
                    {isDelivered == "false" ? "not delivered" : isDelivered}
                  </span>
                </p>
                <p className="text-gray-700">
                  Total Price:{" "}
                  <span className="text-red-500 font-bold">
                    Rs. {totalPrice}
                  </span>
                </p>
                <p className="text-gray-700">
                  Payment Status:{" "}
                  <span
                    className={isPaid ? "text-green-500" : "text-yellow-500"}
                  >
                    {isPaid ? "Paid" : "Paid"}
                  </span>
                </p>

                <h3 className="mt-4 text-md font-semibold text-blue-600">
                  Products:
                </h3>
                <ul className="space-y-2">
                  {orderItems.map((item) => (
                    <li key={item._id} className="flex items-center space-x-2">
                      <img
                        src={item.product?.images[0]}
                        alt={item.product.name}
                        className="w-12 h-12 rounded-md"
                      />
                      <div>
                        <p className="text-gray-700">
                          Product Name:{" "}
                          <span className="text-blue-600">
                            {item.product.name}
                          </span>
                        </p>
                        <p className="text-gray-700">
                          Quantity:{" "}
                          <span className="text-green-700">
                            {item.quantity}
                          </span>{" "}
                          - Price:{" "}
                          <span className="text-red-500">Rs.{item.price}</span>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
