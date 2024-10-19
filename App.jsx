import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";
import LandingPage from "./src/pages/LandingPage";
import ContactUsPage from "./src/pages/ContactUsPage";
import ProductPage from "./src/pages/ProductPage";
import ProductDetailsPage from "./src/pages/ProductDetailsPage";
import CategoryPage from "./src/pages/CategoryPage";
import ProfilePage from "./src/pages/ProfilePage";
import MyCartPage from "./src/pages/MyCartPage";
import BuyNow from "./src/pages/BuyNow";
import Signup from "./src/pages/SignUp";
import Login from "./src/pages/Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");

    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
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
          </>
        )}

        <Route path="/categoryList" element={<CategoryPage />} />
        <Route path="/categories-Product/:category_id" element={<ProductPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;