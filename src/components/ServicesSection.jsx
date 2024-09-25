import React from "react";
import { FaShippingFast, FaHeadset, FaRegCreditCard } from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      title: "Fast Delivery",
      description:
        "Get your orders delivered quickly and safely with our express shipping options.",
      icon: <FaShippingFast size={40} className="text-blue-500" />,
    },
    {
      title: "24/7 Support",
      description:
        "Our support team is available around the clock to assist you with any inquiries.",
      icon: <FaHeadset size={40} className="text-green-500" />,
    },
    {
      title: "Secure Payments",
      description:
        "Shop with confidence using our secure payment options, including credit cards and PayPal.",
      icon: <FaRegCreditCard size={40} className="text-purple-500" />,
    },
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Experience unmatched services tailored to make your shopping easier
          and more enjoyable.
        </p>

        <div className="flex flex-wrap justify-center items-start gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full transition transform hover:scale-105 duration-300 ease-in-out"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-left">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
