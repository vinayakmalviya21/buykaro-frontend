import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const EditProfileModal = ({ toggleEditProfile, user, updateUserDetails }) => {
    const [formData, setFormData] = useState({
        phone: user?.phone || "",
        address: user?.shippingAddress?.address || "",
        city: user?.shippingAddress?.city || "",
        postalCode: user?.shippingAddress?.postalCode || "",
        country: user?.shippingAddress?.country || "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        const userId = user._id;
        console.log("userId",userId)
        try {
            const response = await axios.put(
                `${import.meta.env.VITE_API_URL}/api/users/edit-profile`,
                { ...formData, userId },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Profile Updated",
                    text: "Your profile details have been updated.",
                });

                const updatedUser = response.data.user;

                localStorage.setItem("user", JSON.stringify(updatedUser));

                updateUserDetails(updatedUser);
                toggleEditProfile();
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to update profile. Please try again.",
            });
        }
    };

    return (
        <div className="fixed mt-10 inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-6 relative">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 mb-4">
                    Edit Profile
                </h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Street Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your street address"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">City</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your city"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Postal Code</label>
                        <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your postal code"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Country</label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your country"
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
            </div>
        </div>
    );
};

export default EditProfileModal;
