import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Signup() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/signup`,
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          maxBodyLength: Infinity,
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        
        // Store user data in local storage
        localStorage.setItem("user", JSON.stringify({
          userId: response.data.userId,
          userName: response.data.userName,
          email: response.data.email,
        }));

        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "You have been registered successfully.",
          confirmButtonText: "Okay",
        }).then(() => {
          navigate("/");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: response.data.message || "Failed to sign up.",
          confirmButtonText: "Okay",
        });
      }
    } catch (error) {
      console.error("Error details:", error);
      let errorMessage = "An error occurred. Please try again.";

      if (error.response) {
        errorMessage = error.response.data.message || "Failed to sign up.";
      } else if (error.request) {
        errorMessage = "No response from the server. Please try again.";
      }
      Swal.fire({
        icon: "error",
        title: "Sign Up Error",
        text: errorMessage,
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 relative">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              className="border border-gray-300 rounded-lg py-2 px-4 pr-10 w-full focus:outline-none focus:border-blue-500"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="mt-6 absolute inset-y-0 right-3 flex items-center text-gray-600 focus:outline-none"
            >
              {isPasswordVisible ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full mt-auto inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
