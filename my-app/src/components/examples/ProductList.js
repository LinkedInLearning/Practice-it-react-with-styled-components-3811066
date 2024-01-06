// ProductList.js
import React from "react";
import ProductDetails from "./ProductDetails";
import products from "/productData"; // Import data from the separate file

const ProductList = () => {
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <ProductDetails key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
