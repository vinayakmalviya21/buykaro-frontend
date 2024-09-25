import React, { useState } from 'react';
import Wishlist from '../components/Wishlist';
import EditProfileModal from '../components/EditProfileModal';

export default function ProfilePage() {
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);

  // Function to handle opening and closing the modal
  const toggleEditProfile = () => {
    setEditProfileOpen(!isEditProfileOpen);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-4">Profile Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-lg font-semibold text-gray-700 mb-2">Name:</p>
            <p className="text-gray-600">John Doe</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-700 mb-2">Email:</p>
            <p className="text-gray-600">johndoe@email.com</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-700 mb-2">Phone:</p>
            <p className="text-gray-600">123-456-7890</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-700 mb-2">Address:</p>
            <p className="text-gray-600">1234 Street Name, City, Country</p>
          </div>
        </div>
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
      {isEditProfileOpen && <EditProfileModal toggleEditProfile={toggleEditProfile} />}
    </div>
  );
}
