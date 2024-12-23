"use client"
import React from 'react';
import { Card, CardContent, Typography, CardActions ,Button} from "@mui/material";






const Product = ({ id, title, description }) => {
 
  
  
  
  
  const handleAdd = () => {
    const product={id,title,description};
    console.log("Adding to cart:", product);
    addtoCart(product);
    router.push('/AddtoCart')
    
  };


  

  return (
    <div>
      <Card
        sx={{
          maxWidth: 350,
          maxHeight:550,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography variant="h4">{title}</Typography>
          <Typography>ID: {id}</Typography>
          <Typography>Description: {description}</Typography>
        </CardContent>

        <CardActions>
          {/* Add to Cart Button */}
          <Button onClick={handleAdd}>Add to Cart</Button>
          <Button  onClick={handleDetail}>Detail</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
