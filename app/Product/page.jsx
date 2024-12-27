"use client";
import { useEffect, useState } from "react";
import Product from "../Product";
import { Box, Button } from "@mui/material";


const Page = () => {
  const [products, setProducts] = useState([]); // State for products
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [totalPages, setTotalPages] = useState(1); // State for total pages
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
  const productsPerPage = 8; // Number of products to show per page

  // Fetch the list of products for the current page with search and category filters
  async function FetchlistofProducts(page, query = "", category = "") {
    try {
      const url = `https://dummyjson.com/products?limit=${productsPerPage}&skip=${(page - 1) * productsPerPage}&search=${query}&category=${category}`;
      const data = await fetch(url);
      const result = await data.json();
      setProducts(result.products); // The correct key is 'products'
      setTotalPages(Math.ceil(result.total / productsPerPage)); // Assuming the API returns a 'total' field for the total count of products
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError("Error fetching data");
      setLoading(false);
    }
  }

  // UseEffect to call the function when the component mounts or when the page changes
  useEffect(() => {
    FetchlistofProducts(currentPage, searchQuery, selectedCategory);
  }, [currentPage, searchQuery, selectedCategory]);

  // Handle loading state and errors
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Handle category selection change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset to first page when category changes
  };

  return (
    <Box className="flex flex-col bg-gray-100 h-screen">
      {/* Filters Section */}
      <Box className="p-4  space-y-4">
        <Box className="flex space-x-4">
          {/* Search Filter */}
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products"
            className="px-4 py-2 border border-gray-300 rounded w-full sm:w-1/2"
          />
          
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="px-4 py-2 border border-gray-300 rounded"
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
            <option value="beauty">Beauty</option>
            <option valuse="fragrance">Fragrance</option>
            {/* Add more categories as needed */}
          </select>
        </Box>
      </Box>

      {/* Product Section */}
      <Box className="flex-grow p-4 overflow-auto">
        <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-100">
          {products.map((post) => (
            <Box key={post.id} className="product-item">
              <Product
                id={post.id}
                title={post.title}
                description={post.description}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Pagination Section */}
      <Box className="flex justify-center items-center py-4  space-x-8">
        <Button
          onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Page;
