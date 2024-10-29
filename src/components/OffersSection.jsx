import React from "react";
import { motion } from "framer-motion"; 
import laptopImage from '../assets/images/laptop-image.jpg';
import shoesImage from '../assets/images/shoes-image2.jpg';
import fashionImage from '../assets/images/fashion-image.jpg';

export default function OffersSection() {
  const offers = [
    {
      title: "50% Off on Electronics",
      description:
        "Get the best deals on all electronic items, including phones, laptops, and accessories.",
      img: laptopImage, 
      link: "/categories-Product/6713f4d4b4df71ef3b0db337",
    },
    {
      title: "Buy 1 Get 1 Free on Shoes",
      description:
        "Exclusive offers on our latest collection of shoes. Limited time only!",
      img: shoesImage,
      link: "/categories-Product/6713f4d4b4df71ef3b0db338",
    },
    {
      title: "Up to 70% Off on Fashion",
      description:
        "Shop the latest trends with discounts up to 70%. Don't miss out!",
      img: fashionImage,
      link: "/categories-Product/6713f4d4b4df71ef3b0db338",
    },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
          Exclusive Offers
        </h2>
        <p className="text-lg mb-8 text-gray-700 tracking-wide">
          Unlock unbeatable deals on the latest trends and products!
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col max-w-xs w-full transform transition duration-300 ease-in-out hover:shadow-2xl"
            >
              <img
                className="w-full h-48 object-cover"
                src={offer.img}
                alt={offer.title}
              />

              <div className="p-6 flex flex-col justify-between h-full">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>

                <a
                  href={offer.link}
                  onClick={handleScrollToTop}
                  className="mt-auto inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-600 transition duration-300 transform hover:scale-105"
                >
                  Shop Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
