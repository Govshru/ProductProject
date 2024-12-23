"use client";
import React, { useEffect, useState } from 'react';
 import { useRouter } from 'next/navigation'
import { Card, Typography } from '@mui/material';

const ProductDetail = ({params}) => {
    const unwrappedParams=React.use(params)
    console.log({params});
    const{id}=unwrappedParams;
    console.log("id",params)
  const [product, setProduct] = useState(null);
  const router = useRouter();

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
    <div className="h-screen flex items-center justify-center">
        <Card className="max-w-[450px] max-h-[950px] flex flex-col justify-between">

      <h1>Product Details</h1>
      <div>
        <h2>{product.title}</h2>
        <Typography><strong>ID:</strong> {product.id}</Typography>
        <Typography><strong>Description:</strong> {product.description}</Typography>
        <Typography><strong>Price:</strong> ${product.price}</Typography>
        <Typography><strong>Category:</strong> {product.category}</Typography>
        {/* Display any additional product details here */}
      </div>
        </Card>
    </div>
  );
};

export default ProductDetail;
