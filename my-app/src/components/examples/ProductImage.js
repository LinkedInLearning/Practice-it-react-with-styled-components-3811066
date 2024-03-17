import React from "react";
const ProductImage = (props) => {
  const imageUrl = props.imageUrl || "default-image.jpg";

  return (
    <div>
      <img src={imageUrl} alt="Product" />
    </div>
  );
};

export default ProductImage;
