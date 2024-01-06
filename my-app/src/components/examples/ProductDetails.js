// ProductDetails.js
import React, { useState, useEffect } from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulating a fetch from an API
    fetch("https://api.example.com/products/1")
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ProductImage imageUrl={product.image} />
      <ProductInfo name={product.name} price={product.price} />
    </div>
  );
};


const InfoContainer = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
`;

// Define a styled component for the product name
const ProductName = styled.h2`
  color: #333;
`;

// Define a styled component for the product price
const ProductPrice = styled.p`
  color: #008080;
  font-weight: bold;
`;


export default ProductDetails;
