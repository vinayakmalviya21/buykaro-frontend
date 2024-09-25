import React, { useRef } from "react";
import '../assets/css/CategoryPage.css';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import fashionImage from "../assets/images/fashion-image.jpg";

const categories = [
  {
    name: "Beauty & Food",
    products: [
      {
        id: 1,
        title: "String Instruments",
        image: fashionImage,
        offer: "Up to 70% Off",
      },
      {
        id: 2,
        title: "Best of Action Toys",
        image: fashionImage,
        offer: "Up to 70% Off",
      },
      {
        id: 3,
        title: "Dry Fruits",
        image: fashionImage,
        offer: "Up to 75% Off",
      },
      {
        id: 4,
        title: "Food Spreads",
        image: fashionImage,
        offer: "Up to 75% Off",
      },
      {
        id: 5,
        title: "Microphones",
        image: fashionImage,
        offer: "Up to 70% Off",
      },
      {
        id: 6,
        title: "Musical Keyboards",
        image: fashionImage,
        offer: "Up to 70% Off",
      },
      { id: 7, title: "Yoga Mat", image: fashionImage, offer: "From ₹159" },
      {
        id: 8,
        title: "Board Games",
        image: fashionImage,
        offer: "Up to 60% Off",
      },
      { id: 9, title: "Candies", image: fashionImage, offer: "Up to 50% Off" },
      {
        id: 10,
        title: "Sports Equipment",
        image: fashionImage,
        offer: "Up to 40% Off",
      },
    ],
  },
  {
    name: "Electronics",
    products: [
      { id: 1, title: "Laptops", image: fashionImage, offer: "Up to 30% Off" },
      {
        id: 2,
        title: "Mobile Phones",
        image: fashionImage,
        offer: "Up to 20% Off",
      },
      {
        id: 3,
        title: "Headphones",
        image: fashionImage,
        offer: "Up to 50% Off",
      },
      {
        id: 4,
        title: "Smart Watches",
        image: fashionImage,
        offer: "Up to 25% Off",
      },
      { id: 5, title: "Speakers", image: fashionImage, offer: "Up to 40% Off" },
      { id: 6, title: "Tablets", image: fashionImage, offer: "Up to 35% Off" },
      { id: 7, title: "Drones", image: fashionImage, offer: "Up to 50% Off" },
      {
        id: 8,
        title: "Gaming Consoles",
        image: fashionImage,
        offer: "Up to 30% Off",
      },
      { id: 9, title: "Monitors", image: fashionImage, offer: "Up to 20% Off" },
      { id: 10, title: "Cameras", image: fashionImage, offer: "Up to 40% Off" },
    ],
  },
  {
    name: "Clothing",
    products: [
      {
        id: 1,
        title: "Men’s T-Shirts",
        image: fashionImage,
        offer: "Up to 50% Off",
      },
      {
        id: 2,
        title: "Women’s Dresses",
        image: fashionImage,
        offer: "Up to 40% Off",
      },
      {
        id: 3,
        title: "Kids Clothing",
        image: fashionImage,
        offer: "Up to 30% Off",
      },
      { id: 4, title: "Jeans", image: fashionImage, offer: "Up to 50% Off" },
      { id: 5, title: "Hoodies", image: fashionImage, offer: "Up to 45% Off" },
      { id: 6, title: "Jackets", image: fashionImage, offer: "Up to 35% Off" },
      { id: 7, title: "Sweaters", image: fashionImage, offer: "Up to 30% Off" },
      { id: 8, title: "Suits", image: fashionImage, offer: "Up to 60% Off" },
      { id: 9, title: "Shorts", image: fashionImage, offer: "Up to 20% Off" },
      { id: 10, title: "Shirts", image: fashionImage, offer: "Up to 40% Off" },
    ],
  },
  {
    name: "Footwear",
    products: [
      { id: 1, title: "Sneakers", image: fashionImage, offer: "Up to 45% Off" },
      {
        id: 2,
        title: "Formal Shoes",
        image: fashionImage,
        offer: "Up to 50% Off",
      },
      { id: 3, title: "Sandals", image: fashionImage, offer: "Up to 30% Off" },
      {
        id: 4,
        title: "Flip Flops",
        image: fashionImage,
        offer: "Up to 25% Off",
      },
      { id: 5, title: "Boots", image: fashionImage, offer: "Up to 35% Off" },
      {
        id: 6,
        title: "Running Shoes",
        image: fashionImage,
        offer: "Up to 40% Off",
      },
      { id: 7, title: "Loafers", image: fashionImage, offer: "Up to 30% Off" },
      { id: 8, title: "Heels", image: fashionImage, offer: "Up to 50% Off" },
      {
        id: 9,
        title: "Moccasins",
        image: fashionImage,
        offer: "Up to 20% Off",
      },
      {
        id: 10,
        title: "Slippers",
        image: fashionImage,
        offer: "Up to 35% Off",
      },
    ],
  },
  {
    name: "Beauty Products",
    products: [
      {
        id: 1,
        title: "Makeup Kits",
        image: fashionImage,
        offer: "Up to 25% Off",
      },
      {
        id: 2,
        title: "Hair Care",
        image: fashionImage,
        offer: "Up to 35% Off",
      },
      {
        id: 3,
        title: "Skin Care",
        image: fashionImage,
        offer: "Up to 40% Off",
      },
      { id: 4, title: "Perfumes", image: fashionImage, offer: "Up to 30% Off" },
      {
        id: 5,
        title: "Nail Care",
        image: fashionImage,
        offer: "Up to 20% Off",
      },
      { id: 6, title: "Shampoo", image: fashionImage, offer: "Up to 25% Off" },
      {
        id: 7,
        title: "Conditioner",
        image: fashionImage,
        offer: "Up to 35% Off",
      },
      {
        id: 8,
        title: "Face Wash",
        image: fashionImage,
        offer: "Up to 30% Off",
      },
      {
        id: 9,
        title: "Lipsticks",
        image: fashionImage,
        offer: "Up to 40% Off",
      },
      {
        id: 10,
        title: "Moisturizers",
        image: fashionImage,
        offer: "Up to 20% Off",
      },
    ],
  },
  {
    name: "Home Appliances",
    products: [
      {
        id: 1,
        title: "Vacuum Cleaners",
        image: fashionImage,
        offer: "Up to 30% Off",
      },
      {
        id: 2,
        title: "Microwaves",
        image: fashionImage,
        offer: "Up to 35% Off",
      },
      {
        id: 3,
        title: "Refrigerators",
        image: fashionImage,
        offer: "Up to 20% Off",
      },
      {
        id: 4,
        title: "Washing Machines",
        image: fashionImage,
        offer: "Up to 40% Off",
      },
      {
        id: 5,
        title: "Air Conditioners",
        image: fashionImage,
        offer: "Up to 25% Off",
      },
      {
        id: 6,
        title: "Water Purifiers",
        image: fashionImage,
        offer: "Up to 20% Off",
      },
      { id: 7, title: "Ovens", image: fashionImage, offer: "Up to 15% Off" },
      {
        id: 8,
        title: "Mixers & Grinders",
        image: fashionImage,
        offer: "Up to 30% Off",
      },
      {
        id: 9,
        title: "Electric Kettles",
        image: fashionImage,
        offer: "Up to 20% Off",
      },
      { id: 10, title: "Geysers", image: fashionImage, offer: "Up to 35% Off" },
    ],
  },
  {
    name: "Books & Stationery",
    products: [
      {
        id: 1,
        title: "Fiction Books",
        image: fashionImage,
        offer: "Up to 60% Off",
      },
      {
        id: 2,
        title: "Non-Fiction Books",
        image: fashionImage,
        offer: "Up to 50% Off",
      },
      {
        id: 3,
        title: "Notebooks",
        image: fashionImage,
        offer: "Up to 30% Off",
      },
      {
        id: 4,
        title: "Pens & Markers",
        image: fashionImage,
        offer: "Up to 20% Off",
      },
      {
        id: 5,
        title: "Art Supplies",
        image: fashionImage,
        offer: "Up to 40% Off",
      },
      {
        id: 6,
        title: "School Bags",
        image: fashionImage,
        offer: "Up to 25% Off",
      },
      { id: 7, title: "Diaries", image: fashionImage, offer: "Up to 35% Off" },
      {
        id: 8,
        title: "Calendars",
        image: fashionImage,
        offer: "Up to 15% Off",
      },
      {
        id: 9,
        title: "Calculators",
        image: fashionImage,
        offer: "Up to 30% Off",
      },
      {
        id: 10,
        title: "Highlighters",
        image: fashionImage,
        offer: "Up to 20% Off",
      },
    ],
  },
];

const CategoryPage = () => {
  const scrollRight = (scrollRef) => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollLeft = (scrollRef) => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto p-5">

      {categories.map((category) => {
        const scrollRef = useRef(null);

        return (
          <div key={category.name} className="mb-10 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">{category.name}</h2>
              <div className="space-x-3">
                <button
                  onClick={() => scrollLeft(scrollRef)}
                  className="bg-gray-200 text-gray-600 p-2 rounded-full hover:bg-gray-300"
                >
                  <BiChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={() => scrollRight(scrollRef)}
                  className="bg-gray-200 text-gray-600 p-2 rounded-full hover:bg-gray-300"
                >
                  <BiChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto space-x-4 hide-scrollbar"
            >
              {category.products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-48 border p-3 rounded-lg shadow-sm hover:shadow-lg transition duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-36 object-cover mb-3 rounded"
                  />
                  <h3 className="text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 mb-2">{product.title}</h3>
                  <p className="text-gray-500 text-sm">{product.offer}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPage;
