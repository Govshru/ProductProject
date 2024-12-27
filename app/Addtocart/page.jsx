"use client";
import React from "react";
import { useCart } from "../../context/CartContext";

import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const AddToCartPage = () => {
  const { cart, removeFromCart } = useCart(); // Get the current cart from context

  

  return (
    
    <Box >
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cart.map((product, index) => (
          <Card key={index} className="max-w-[450px] max-h-[450px] flex flex-col justify-between transition-shadow duration-300 ease-in-out hover:shadow-lg hover:scale-105 bg-gray-200">
            <CardContent>
              <Typography variant="h5" > Id:{product.id}</Typography>
              <Typography variant="h6"> Title-{product.title}</Typography>
              <Typography>Description-{product.description}</Typography>
              <Button
                variant="contained"
                className="bg-gray-500 hover:bg-gray-600"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
    
  );
};

export default AddToCartPage;
