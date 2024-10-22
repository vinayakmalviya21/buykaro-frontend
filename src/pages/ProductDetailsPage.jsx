import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaTimes, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Swal from "sweetalert2"; // Import SweetAlert2

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pincode, setPincode] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_API_URL
          }/api/product/getProductDetails?id=${productId}`
        );
        if (!response.ok) throw new Error("Failed to fetch product details");
        const data = await response.json();
        setProductDetails(data[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productDetails.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productDetails.images.length - 1 : prevIndex - 1
    );
  };

  const handlePincodeSubmit = (e) => {
    e.preventDefault();

    if (/^\d{6}$/.test(pincode)) {
      setDeliveryTime("Delivery available in 3-4 days");
    } else if (pincode.length > 8 || pincode.length < 6) {
      setDeliveryTime("Invalid pincode");
    } else {
      setDeliveryTime("Delivery time may vary for this pincode");
    }
  };

  const renderStars = (rating) => {
    const totalStars = 5;
    return [...Array(totalStars)].map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  // Check if user is logged in
  const isLoggedIn = () => {
    return !!localStorage.getItem("token");
  };

  // Handle button clicks
  // Handle button clicks
  const handleAction = async (action) => {
    if (!isLoggedIn()) {
      Swal.fire({
        icon: "warning",
        title: "Please login",
        text: `You need to login to ${action}`,
        confirmButtonText: "Login",
      });
    } else {
      switch (action) {
        case "add to wishlist":
          try {
            const token = localStorage.getItem("token");
            const response = await fetch(
              `${import.meta.env.VITE_API_URL}/api/wishlist/add`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ productId }),
              }
            );

            if (response.status === 400) {
              Swal.fire({
                icon: "info",
                title: "Product already in wishlist",
                text: "This product is already in your wishlist.",
              });
              return; 
            }

            if (!response.ok) {
              throw new Error("Failed to add product to wishlist");
            }

            const data = await response.json();
            Swal.fire({
              icon: "success",
              title: "Added to Wishlist",
              text: "Product has been added to your wishlist!",
            });
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: error.message,
            });
          }
          break;

        case "add to cart":
          // Call API to add to cart
          console.log("API call to add to cart");
          break;

        case "buy now":
          // Call API to proceed to buy
          console.log("API call to buy now");
          break;

        default:
          break;
      }
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8 lg:px-24">
      <div className={`${isModalOpen ? "blur-sm" : ""}`}>
        <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-12">
          <div className="w-full lg:w-1/3">
            <img
              className="w-full h-auto rounded-lg object-contain cursor-pointer"
              src={productDetails.images[0]}
              alt={productDetails.name}
              onClick={() => openModal(0)}
            />
            <div className="flex justify-center mt-4 space-x-2">
              {productDetails.images.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer transition ${
                    currentImageIndex === index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  onClick={() => openModal(index)}
                />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col justify-between space-y-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{productDetails.name}</h1>
              <p className="text-lg mb-4 text-gray-600">
                {productDetails.description}
              </p>

              <div className="flex items-center mb-4 space-x-2">
                <div className="flex">{renderStars(productDetails.rating)}</div>
                <span className="text-gray-500 text-sm">
                  ({productDetails.numReviews} reviews)
                </span>
              </div>

              <div className="text-2xl font-bold text-green-500 mb-4">
                ₹{productDetails.price}
              </div>

              <div
                className={`text-sm font-medium mb-4 ${
                  productDetails.countInStock > 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {productDetails.countInStock > 0
                  ? `${productDetails.countInStock} in stock`
                  : "Out of stock"}
              </div>

              <div className="mt-4">
                <h2 className="text-xl font-bold mb-2">Reviews:</h2>
                {productDetails.reviews.length > 0 ? (
                  productDetails.reviews.map((review) => (
                    <div
                      key={review._id}
                      className="border-b border-gray-200 py-2"
                    >
                      <p className="text-gray-800">{review.comment}</p>
                      <div className="flex items-center mb-2 space-x-2">
                        <span className="font-semibold">
                          {review.user.name}
                        </span>{" "}
                        <span className="text-gray-500 text-sm">
                          {new Date(review.createdAt).toLocaleDateString()}{" "}
                        </span>
                      </div>
                      <div className="flex items-center mb-4 space-x-2">
                        <div className="flex">
                          {renderStars(review.rating)}{" "}
                        </div>
                        <span className="text-gray-500 text-sm">
                          ({productDetails.numReviews} reviews)
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No reviews yet</p>
                )}
              </div>
            </div>

            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-end lg:space-x-4">
              <button
                className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
                onClick={() => handleAction("add to wishlist")}
              >
                Add to Wishlist
              </button>
              <button
                className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
                onClick={() => handleAction("add to cart")}
              >
                Add to Cart
              </button>
              <button
                className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition"
                onClick={() => handleAction("buy now")}
              >
                Buy Now
              </button>
            </div>

            <form onSubmit={handlePincodeSubmit} className="mt-6">
              <label className="block text-gray-700 font-bold mb-2">
                Enter Pincode:
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className={`border rounded px-4 py-2 focus:outline-none transition-all focus:ring-2 ${
                    deliveryTime === "Invalid pincode"
                      ? "border-red-500 focus:ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                  placeholder="Enter pincode"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                >
                  Check
                </button>
              </div>

              {deliveryTime && (
                <p
                  className={`mt-2 ${
                    deliveryTime === "Invalid pincode"
                      ? "text-red-500"
                      : "text-gray-700"
                  }`}
                >
                  {deliveryTime}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              className="max-w-full max-h-full object-contain"
              src={productDetails.images[currentImageIndex]}
              alt="Product"
            />
            <button
              className="absolute top-2 right-2 text-white"
              onClick={closeModal}
            >
              <FaTimes size={24} />
            </button>
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white"
              onClick={prevImage}
            >
              <FaChevronLeft size={32} />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
              onClick={nextImage}
            >
              <FaChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
