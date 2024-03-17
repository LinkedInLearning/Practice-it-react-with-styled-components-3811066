import React from "react";
import products from "./ProductData";
import ProductInfo from "./ProductInfo";

const ProductList = () => {
  return (
    <>
      <h1> Product List</h1>
      {products.map((product) => (
        <ProductInfo key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductList;
