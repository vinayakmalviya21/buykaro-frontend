import React, { useState, useEffect } from "react";
import Wishlist from "../components/Wishlist";
import EditProfileModal from "../components/EditProfileModal";
import axios from "axios";

export default function ProfilePage(props) {
  
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    shippingAddress: {
      address: "",
      city: "",
      postalCode: "",
      country: "",
    },
  });

  const getUser = async () => {
    const {id} = JSON.parse(localStorage.getItem("user"));
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/get-user`,
        { userId:id}
      );
  
      if (response.status === 200) {
        const { user } = response.data;
  
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (error) {
      console.error("Error details:", error);
    }
  }
  
  useEffect(() => {
    getUser();

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleEditProfile = () => {
    setEditProfileOpen(!isEditProfileOpen);
  };

  const updateUserDetails = (updatedDetails) => {
    setUser(updatedDetails);
    localStorage.setItem("user", JSON.stringify(updatedDetails));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
          Profile Details
        </h1>
        {user ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-lg font-semibold text-gray-700 mb-2">Name:</p>
              <p className="text-gray-600">{user.name}</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-700 mb-2">Email:</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-700 mb-2">Phone:</p>
              <p className="text-gray-600">{user.phone || "N/A"}</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-700 mb-2">
                Address:
              </p>
              <p className="text-gray-600">
                {user.shippingAddress?.address || "N/A"},{" "}
                {user.shippingAddress?.city || "N/A"},
                {user.shippingAddress?.postalCode || "N/A"},{" "}
                {user.shippingAddress?.country || "N/A"}
              </p>
            </div>
          </div>
        ) : (
          "Loading"
        )}
        <button
          className="mt-6 w-max inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          onClick={toggleEditProfile}
        >
          Edit Profile
        </button>
      </div>

      {/* Wishlist Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <Wishlist />
      </div>

      {/* Edit Profile Modal */}
      {isEditProfileOpen && (
        <EditProfileModal
          toggleEditProfile={toggleEditProfile}
          user={user}
          updateUserDetails={updateUserDetails}
        />
      )}
    </div>
  );
}
