import React, { useRef, useState, useEffect } from "react";
import "../assets/css/CategoryPage.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import fashionImage from "../assets/images/fashion-image.jpg";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRefs = useRef([]); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/categories`
        );
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const scrollRight = (index) => {
    if (scrollRefs.current[index] && scrollRefs.current[index].current) {
      scrollRefs.current[index].current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollLeft = (index) => {
    if (scrollRefs.current[index] && scrollRefs.current[index].current) {
      scrollRefs.current[index].current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  if (loading) {
    return <div className="text-center">Loading categories...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-5">
      {categories.length === 0 ? (
        <div className="text-center">No categories available</div>
      ) : (
        categories.map((category, index) => {
          // Create a new ref for each category if it doesn't already exist
          if (!scrollRefs.current[index]) {
            scrollRefs.current[index] = React.createRef();
          }

          return (
            <div key={category.name} className="mb-10 relative">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  {category.name}
                </h2>
                <div className="space-x-3">
                  <button
                    onClick={() => scrollLeft(index)}
                    className="bg-gray-200 text-gray-600 p-2 rounded-full hover:bg-gray-300"
                  >
                    <BiChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={() => scrollRight(index)}
                    className="bg-gray-200 text-gray-600 p-2 rounded-full hover:bg-gray-300"
                  >
                    <BiChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div
                ref={scrollRefs.current[index]}
                className="flex overflow-x-auto space-x-4 hide-scrollbar"
              >
                {category.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex-shrink-0 w-48 border p-3 rounded-lg shadow-sm hover:shadow-lg transition duration-300"
                  >
                    <img
                      src={product.image || fashionImage}
                      alt={product.title}
                      className="w-full h-36 object-cover mb-3 rounded"
                    />
                    <h3 className="text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{product.offer}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CategoryPage;
