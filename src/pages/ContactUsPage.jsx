import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"; // Optional Icons for contact details

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            We are always here to help! Reach out for any questions or concerns.
          </p>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8">
          <div className="w-full lg:w-8/12 p-8 bg-white rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 mb-8">
              Send Us a Message
            </h3>
            <form className="space-y-8">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-max bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="w-full h-min lg:w-4/12 p-6 bg-gray-50 rounded-2xl shadow-xl flex flex-col justify-start">
            <h3 className="text-3xl font-bold text-pink-500 mb-4">
              Contact Information
            </h3>
            <div className="space-y-4 text-gray-800">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-purple-600 w-6 h-6 mr-3" />
                <div>
                  <h4 className="font-bold text-lg">Address:</h4>
                  <p>123 Shopping City , Delhi, India</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-blue-600 w-6 h-6 mr-3" />
                <div>
                  <h4 className="font-bold text-lg">Phone:</h4>
                  <p>+91 9047829308</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-green-600 w-6 h-6 mr-3" />
                <div>
                  <h4 className="font-bold text-lg">Email:</h4>
                  <p>support@buykaro.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
