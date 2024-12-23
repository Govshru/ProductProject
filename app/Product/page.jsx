"use client";
import { useEffect, useState } from "react";
import Product from "../Product";

const Page = () => {
  const [products, setProducts] = useState([]); // State for products
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors
  const [cart, setCart] = useState([]); // State for cart items
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [totalPages, setTotalPages] = useState(1); // State for total pages
  const productsPerPage = 5; // Number of products to show per page
console.log("Productpage")
  // Fetch the list of products for the current page
  async function FetchlistofProducts() {
    console.log("ProductNew");
    try {
      const data = await fetch(`https://dummyjson.com/products`);
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
    FetchlistofProducts();
  }, []);

  // Handle loading state and errors
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Handle adding a product to the cart
  const handleAddToCart = (product) => {
    console.log("Product added to cart:", product);
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const isProductInCart = prevCart.some((item) => item.id === product.id);
      if (isProductInCart) {
        console.log("Product already in cart:", product);
        return prevCart; // If product is already in cart, don't add it again
      } else {
        console.log("Adding product to cart:", product);
        return [...prevCart, product]; // Add product to cart
      }
    });
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Product Section */}
      <div className="flex-grow p-4 overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((post) => (
            <div key={post.id} className="product-item">
              <Product
                id={post.id}
                title={post.title}
                description={post.description}
                handleAddToCart={handleAddToCart} // Passing the function as a prop
              />
            </div>
          ))}
        </div>
      </div>


      

      {/* Cart Section
      <div className="w-2/5 p-4 border-l border-gray-300">
        <h3 className="text-xl font-semibold">Shopping Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="text-sm">
                {item.title} - {item.description}
              </li>
            ))}
          </ul>
        )}
      </div> */}

      {/* Pagination Section */}
      <div className="flex justify-center items-center py-4 bg-gray-200 space-x-8">
        <button
          onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={currentPage === 1}
           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg:-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;
