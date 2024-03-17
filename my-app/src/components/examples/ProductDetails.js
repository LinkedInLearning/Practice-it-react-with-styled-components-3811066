import React, { useEffect, useState } from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https:/api.example.com/products")
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  if (!product) {
    return <p>Loading..</p>
  }
  return (
    <div>
      <ProductImage imageUrl={product.image} />
      <ProductInfo name={product.name} price={product.price} />
    </div>
  );
};

export default ProductDetails;
