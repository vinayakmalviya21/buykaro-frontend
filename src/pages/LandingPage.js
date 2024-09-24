import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import OffersSection from "../components/OffersSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ContactUsSection from "../components/ContactUsSection";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OffersSection />
      <AboutSection />
      <ServicesSection />
      <ContactUsSection />
      <Footer />
    </>
  );
}
