
"use client";
import React from 'react';
import { useCart } from '../../context/CartContext';

import { Card, CardContent, Typography, Button } from "@mui/material";


const AddToCartPage = () => {
  const { cart,removeFromCart } = useCart();  // Get the current cart from context

  // console.log("Cart data on AddToCartPage:",{cart});

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cart.map((product, index) => (
          <Card key={index} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant='h5'>{product.id}</Typography>
              <Typography variant="h6">{product.title}</Typography>
              <Typography>{product.description}</Typography>
              <Button variant="contained"
                color="error" onClick={()=>removeFromCart(product.id)}>
Remove
              </Button>
            </CardContent>
            
          </Card>
        ))
      )}
    </div>
  );
};

export default AddToCartPage;
