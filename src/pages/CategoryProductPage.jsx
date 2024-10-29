import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CategoryProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const { category_id } = useParams();

  const priceRanges = [
    { label: "0 - 25000", min: 0, max: 25000 },
    { label: "25000 - 50000", min: 25000, max: 50000 },
    { label: "50000 - 100000", min: 50000, max: 100000 },
    { label: "more than 100000", min: 100000, max: Infinity },
  ];

  const [priceRange, setPriceRange] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/api/product/getProductByCategories?id=${category_id}`
      );
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);

      const uniqueBrands = [
        ...new Set(data.map((product) => product.brand || product.author)),
      ];
      setBrands(uniqueBrands);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category_id]);

  const applyFilters = () => {
    let filtered = products;

    if (priceRange) {
      const { min, max } = priceRanges.find(
        (range) => range.label === priceRange
      );
      filtered = filtered.filter(
        (product) => product.price >= min && product.price < max
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(product.brand || product.author)
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [priceRange, selectedBrands, searchTerm, products]);

  const handlePriceChange = (e) => setPriceRange(e.target.value);

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const toggleFilterPopup = () => setShowFilterPopup(!showFilterPopup);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl font-semibold">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        <p className="text-2xl font-semibold">{error}</p>
      </div>
    );
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto p-6">
      <header className="flex flex-col items-start md:items-center text-start md:text-center mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Products in{" "}
          {products.length > 0 ? products[0].category.name : "this Category"}
        </h1>
        <p className="mt-2 text-gray-600">
          {products[0]?.category.description}
        </p>

        {/* Search Bar */}
        <div className="flex w-full mt-4 lg:mt-2 lg:w-1/3 lg:mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full border rounded p-2"
          />
        </div>

        {/* Filter Button */}
        <button
          onClick={toggleFilterPopup}
          className="mt-4 lg:hidden bg-blue-500 text-white px-4 py-2 rounded"
        >
          Filter
        </button>
      </header>

      <div className="flex">
        {/* Filter Sidebar */}
        <aside className="hidden lg:block w-1/4 p-4 border-r">
          {/* Price Range Filter */}
          <div className="mb-4">
            <h3 className="font-semibold">Price Range</h3>
            <select
              value={priceRange}
              onChange={handlePriceChange}
              className="w-full border rounded p-2"
            >
              <option value="">Select Price Range</option>
              {priceRanges.map((range) => (
                <option key={range.label} value={range.label}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          {/* Brand Filter */}
          <div>
            <h3 className="font-semibold">Brands</h3>
            {brands.map((brand) => (
              <label key={brand} className="block mt-2">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />{" "}
                {brand}
              </label>
            ))}
          </div>
        </aside>

        {/* Filter Popup for Mobile */}
        {showFilterPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 w-3/4 md:w-1/2 lg:hidden rounded shadow-lg">
              <header className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Filters</h2>
                <button
                  onClick={toggleFilterPopup}
                  className="text-xl font-bold"
                >
                  &times;
                </button>
              </header>

              {/* Price Range and Brand Filter in Popup */}
              {/* (reuse the same elements from sidebar if needed) */}
            </div>
          </div>
        )}

        {/* Product List */}
        <div className="flex flex-wrap -mx-4 w-full lg:w-3/4">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-xl font-semibold text-gray-500 w-full">
              {searchTerm
                ? `No product found for "${searchTerm}"`
                : "No product for this filter"}
            </p>
          ) : (
            filteredProducts.map((product) => (
              <Link
                key={product._id}
                to={`/product/${product._id}`}
                onClick={handleScrollToTop}
                className="w-full sm:w-full md:w-1/2 lg:w-1/3 px-4 mb-6"
              >
                <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded mb-4 transition-transform transform hover:scale-105 duration-300"
                  />
                  <h2 className="text-xl font-bold text-gradient mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600">{product.brand}</p>
                  <p className="text-gray-600">Rs. {product.price}</p>
                  <p className="text-gray-500 flex-grow">
                    {product.description}
                  </p>
                  <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded transition-colors duration-300 hover:bg-blue-600">
                    Add to Cart
                  </button>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryProductPage;
