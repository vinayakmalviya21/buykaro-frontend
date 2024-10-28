import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";
import LandingPage from "./src/pages/LandingPage";
import ContactUsPage from "./src/pages/ContactUsPage";
import CategoryProductPage from "./src/pages/CategoryProductPage";
import ProductDetailsPage from "./src/pages/ProductDetailsPage";
import CategoryPage from "./src/pages/CategoryPage";
import ProfilePage from "./src/pages/ProfilePage";
import MyCartPage from "./src/pages/MyCartPage";
import BuyNow from "./src/pages/BuyNow";
import Signup from "./src/pages/Signup";
import Login from "./src/pages/Login";
import { userHook } from "./src/context/UserContext";
import MyOrders from "./src/pages/MyOrders";

function App() {
  const {user,setUser} = userHook();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        
        {user && (
          <>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/my-cart" element={<MyCartPage />} />
            <Route path="/buy-now" element={<BuyNow />} />
            <Route path="/my-orders" element={<MyOrders/>} />
          </>
        )}

        <Route path="/categoryList" element={<CategoryPage />} />
        <Route path="/categories-Product/:category_id" element={<CategoryProductPage />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
