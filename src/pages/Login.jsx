import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { userHook } from "../context/UserContext";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = userHook();
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate password length
    if (password.length < 4 || password.length > 10) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be between 4 and 10 characters.",
        confirmButtonText: "Okay",
      });
      return; // Stop execution if validation fails
    }
  
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/login`,
        { email, password }
      );
  
      if (response.status === 200) {
        const { token, user } = response.data;
  
        setUser(user);
  
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
  
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Welcome back!",
        }).then(() => {
          navigate("/");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: response.data.message || "Failed to log in.",
        });
      }
    } catch (error) {
      console.error("Error details:", error);
      let errorMessage = "An error occurred. Please try again.";
  
      if (error.response) {
        errorMessage = error.response.data.message || "Failed to log in.";
      } else if (error.request) {
        errorMessage = "No response from the server. Please try again.";
      }
  
      Swal.fire({
        icon: "error",
        title: "Login Error",
        text: errorMessage,
        confirmButtonText: "Okay",
      });
    } finally {
      setEmail("");
      setPassword("");
    }
  };  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
              placeholder="you@example.com"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg py-2 px-4 pr-10 w-full focus:outline-none focus:border-blue-500"
              placeholder="********"
              maxLength={10}
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
            Log In
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
