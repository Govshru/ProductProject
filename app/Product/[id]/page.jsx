"use client";
import React, { useEffect, useState } from 'react';
 import { useRouter } from 'next/navigation'
import { Box, Button, Card, CardActions, Typography } from '@mui/material';
import { useCart } from '@/context/CartContext';

const ProductDetail = ({params}) => {

  const {addToCart} = useCart();
  const [product, setProduct] = useState(null);
  const router = useRouter();
  
  const handleAddtoCart = () => {
    if(product){

      const productToAdd = { id: product.id, title: product.title, description: product.description };
      console.log("Adding to cart:", productToAdd);
      addToCart(productToAdd);  // Add product to the cart
    }

    
    
  };
  
  const unwrappedParams=React.use(params)
  console.log({params});
  const{id}=unwrappedParams;
  console.log("id",params)
  
  useEffect(()=>{
    if(id){
      fetchProductDetails(id);
    }
  },[id]);
  
  // Fetch product details
  const fetchProductDetails = async (productId) => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Failed to fetch product details:", error);
    }
  };
  
  
  // Show loading or error states
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Box className="h-screen flex items-center justify-center bg-gray-100">
    
    
        <Card className="w-[550px] h-[550px] p-4 flex flex-col justify-between bg-gray-200  outline outline-2 outline-gray-600 rounded-lg">

      <Box >
        <h2 className='text-xl font-semibold'>{product.title}</h2>
        <Typography ><strong>ID:</strong> {product.id}</Typography>
        <Typography><strong>Description:</strong> {product.description}</Typography>
        <Typography><strong>Price:</strong> ${product.price}</Typography>
        <Typography><strong>Category:</strong> {product.category}</Typography>
        {/* Display any additional product details here */}
      </Box>
      <CardActions>
        <Button  onClick={handleAddtoCart}  className='px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600   '>Add To Cart </Button>
        
        
  
      </CardActions>
        </Card>
    </Box>
    </>
  );
};

export default ProductDetail;
