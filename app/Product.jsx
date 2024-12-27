"use client";
import React, { useState,useEffect } from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box } from "@mui/material";
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
    <Box className="bg-gray-100">
      <Card className="max-w-[550px] max-h-[550px] flex flex-col justify-between  bg-gray-200 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:scale-105 ">
        <CardContent>
          <Typography variant="h4" className="text-lg">{title}</Typography>
          <Typography>ID: {id}</Typography>
          <Typography className="text-sm">Description: {description}</Typography>
        </CardContent>

        <CardActions>
          {/* Add to Cart Button */}
          <Button variant="contained" color="primary"  onClick={handleAdd} className='px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600   '>
            Add to Cart
          </Button>
          <Button variant="contained"  color="primary" onClick={handleDetail} className='px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600   ' >
            View Details
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Product;
