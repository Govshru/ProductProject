"use client";
import React, { useState,useEffect } from 'react';
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useCart } from '@/context/CartContext';
 import { useRouter } from 'next/navigation';


const Product = ({ id, title, description }) => {
  
  const {addToCart}=useCart();
  const router=useRouter();
  
  const handleDetail=()=>{
    
    const product = { id, title, description };
    console.log("Detail:", product);
     router.push(`/Product/${id}`);

  }
  const handleAdd = () => {
    const product = { id, title, description };
    console.log("Adding to cart:", product);
    addToCart(product);  // Add product to the cart
    
  };

 return (
    <div>
      <Card className="max-w-[550px] max-h-[550px] flex flex-col justify-between" >
        <CardContent>
          <Typography variant="h4" className="text-lg">{title}</Typography>
          <Typography>ID: {id}</Typography>
          <Typography className="text-sm">Description: {description}</Typography>
        </CardContent>

        <CardActions>
          {/* Add to Cart Button */}
          <Button variant="contained" color="primary"  onClick={handleAdd}>
            Add to Cart
          </Button>
          <Button variant="contained"  color="primary" onClick={handleDetail}>
            View Details
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
