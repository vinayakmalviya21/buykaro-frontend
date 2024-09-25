import React from 'react';
import { FaTrash } from 'react-icons/fa'; // Importing the trash icon from react-icons
import laptopImage from '../assets/images/laptop-image.jpg';

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: 'DELL S Series 27" Full HD IPS Monitor',
      price: '₹12,499',
      imageUrl: laptopImage, // Replace with actual image path
    },
    {
      id: 2,
      name: 'Apple MacBook Pro 16-inch',
      price: '₹2,29,900',
      imageUrl: laptopImage, // Replace with actual image path
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-2 md:p-6">
      <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-4">Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-700">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-grow text-center sm:text-left">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-800 text-lg font-normal">{item.price}</p>
              </div>
              <div className="flex space-x-2 justify-center sm:justify-end">
                {/* Add to Cart Button */}
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                  Add to Cart
                </button>

                {/* Delete Icon Button */}
                <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition">
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
