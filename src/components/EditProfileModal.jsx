import React, { useState } from "react";

const EditProfileModal = ({ toggleEditProfile }) => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@email.com",
    phone: "123-456-7890",
    address: "1234 Street Name, City, Country",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Save the profile information (send to backend or update state)
    console.log("Profile updated:", formData);
    toggleEditProfile(); // Close the modal
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 relative">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 mb-4">
          Edit Profile
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            className="cursor-pointer bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
            onClick={toggleEditProfile}
          >
            Cancel
          </button>
          <button
            className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            onClick={handleSave}
          >
            Save
          </button>
        </div>

        {/* Close the modal when clicking outside */}
        <div className="absolute inset-0" onClick={toggleEditProfile}></div>
      </div>
    </div>
  );
};

export default EditProfileModal;
