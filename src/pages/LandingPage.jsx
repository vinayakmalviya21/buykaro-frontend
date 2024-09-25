import React from "react";
import HeroSection from "../components/HeroSection";
import OffersSection from "../components/OffersSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ContactUsSection from "../components/ContactUsSection";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <OffersSection />
      <AboutSection />
      <ServicesSection />
      <ContactUsSection />
    </>
  );
}
