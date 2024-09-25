import React from 'react';
import fashionImage from "../assets/images/fashion-image.jpg";

// Sample data for products by category
const productsByCategory = {
  Monitors: [
    { id: 1, name: 'Dell Monitor', price: '₹12,499', image: fashionImage, details: '24-inch Full HD, 60Hz Refresh Rate' },
    { id: 2, name: 'HP Monitor', price: '₹10,999', image: fashionImage, details: '27-inch QHD, 75Hz Refresh Rate' },
    { id: 3, name: 'Samsung Monitor', price: '₹15,499', image: fashionImage, details: '32-inch UHD, 144Hz Refresh Rate' },
    { id: 4, name: 'Dell Monitor', price: '₹12,499', image: fashionImage, details: '24-inch Full HD, 60Hz Refresh Rate' },
    { id: 5, name: 'HP Monitor', price: '₹10,999', image: fashionImage, details: '27-inch QHD, 75Hz Refresh Rate' },
    { id: 6, name: 'Samsung Monitor', price: '₹15,499', image: fashionImage, details: '32-inch UHD, 144Hz Refresh Rate' },
    { id: 7, name: 'Dell Monitor', price: '₹12,499', image: fashionImage, details: '24-inch Full HD, 60Hz Refresh Rate' },
    { id: 8, name: 'HP Monitor', price: '₹10,999', image: fashionImage, details: '27-inch QHD, 75Hz Refresh Rate' },
    { id: 9, name: 'Samsung Monitor', price: '₹15,499', image: fashionImage, details: '32-inch UHD, 144Hz Refresh Rate' },
    // Add more monitor products
  ],
  Laptops: [
    { id: 1, name: 'Dell Laptop', price: '₹50,000', image: fashionImage, details: 'Intel i5, 8GB RAM, 512GB SSD' },
    { id: 2, name: 'HP Laptop', price: '₹55,000', image: fashionImage, details: 'Intel i7, 16GB RAM, 1TB HDD' },
    // Add more laptop products
  ],
  Smartphones: [
    { id: 1, name: 'iPhone', price: '₹70,000', image: fashionImage, details: '128GB Storage, A15 Bionic Chip' },
    { id: 2, name: 'Samsung Galaxy', price: '₹60,000', image: fashionImage, details: '256GB Storage, Exynos 2100' },
    // Add more smartphone products
  ],
  // Add more categories
};

const ProductPage = () => {
  const categoryName = 'Monitors'; // Change this to whatever category you want to display
  const products = productsByCategory[categoryName] || [];

  return (
    <div className="flex container mx-auto p-6">
      {/* Filter Section */}
      <div className="hidden lg:block w-1/4 p-4 border-r">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div>
          <h3 className="font-semibold">Price Range</h3>
          <input type="range" className="w-full" />
          <h3 className="font-semibold mt-4">Brands</h3>
          <label>
            <input type="checkbox" /> Dell
          </label>
          <br />
          <label>
            <input type="checkbox" /> HP
          </label>
          <br />
          <label>
            <input type="checkbox" /> Samsung
          </label>
        </div>
      </div>

      {/* Product List */}
      <div className="w-full lg:w-3/4 p-4">
        <h1 className="text-3xl font-bold mb-8">Products in {categoryName}</h1>
        
        {/* Flex container for products */}
        <div className="flex flex-wrap -mx-4">
          {products.map((product) => (
            <div key={product.id} className="w-full sm:w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
              <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.price}</p>
                <p className="text-gray-500">{product.details}</p>
                <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
