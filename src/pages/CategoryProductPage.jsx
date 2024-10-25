import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CategoryProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { category_id } = useParams();

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/api/product/getProductByCategories?id=${category_id}`
      );
      if (!response.ok) throw new Error("Failed to fetch categories");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-2xl font-semibold">Loading products...</p>
          <div className="loader mt-4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-red-500">
          <p className="text-2xl font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex container mx-auto p-6">
      {/* Filter Section */}
      <div className="hidden lg:block w-1/4 p-4 border-r">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Price Range</h3>
          <input type="range" className="w-full" />
        </div>
        <div>
          <h3 className="font-semibold">Brands</h3>
          {["Dell", "HP", "Samsung"].map((brand) => (
            <label key={brand} className="block mt-2">
              <input type="checkbox" /> {brand}
            </label>
          ))}
        </div>
      </div>

      {/* Product List */}
      <div className="w-full lg:w-3/4 p-4">
        <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Products in{" "}
          {products.length > 0 ? products[0].category.name : "this Category"}
        </h1>
        <p className="mb-5">
          {products.length > 0 && products[0].category.description}
        </p>

        <div className="flex flex-wrap -mx-4 cursor-pointer">
          {Array.isArray(products) &&
            products.map((product, index) => (
              <Link
                key={index}
                to={`/product/${product._id}`}
                className="w-full sm:w-full md:w-1/2 lg:w-1/3 px-4 mb-6"
              >
                <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-32 sm:h-40 md:h-40 lg:h-48 object-cover rounded mb-4 transition-transform transform hover:scale-105 duration-300"
                  />
                  <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 mb-2 flex-grow">
                    {product.name}
                  </h2>
                  <p className="text-gray-600">{product.brand}</p>
                  <p className="text-gray-600">Rs.{product.price}</p>
                  <p className="text-gray-500 flex-grow">
                    {product.description}
                  </p>
                  <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded transition-colors duration-300 hover:bg-blue-600">
                    Add to Cart
                  </button>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProductPage;
