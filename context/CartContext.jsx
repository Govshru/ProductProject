
"use client";
import React, { createContext, useState, useContext } from 'react';

// Create a context
const CartContext = createContext();



// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Initialize cart as an empty array
  const [cartCount,setCartCount]=useState(0);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to the cart
    setCartCount(cartCount+1)
  };

  const removeFromCart=(productId)=>{
    setCart((prevCart) => prevCart.filter(product => product.id !== productId));
    setCartCount(cartCount>0?cartCount-1:0)
  };

  return (
    <CartContext.Provider value={{ cart, addToCart,removeFromCart,cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};
