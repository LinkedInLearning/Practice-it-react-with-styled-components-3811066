import React from "react";
const ProductImage = (props) => {
  const imageUrl = props.ImageUrl || "default-image.jpg";

  return (
    <div>
      <img src={props.imageUrl} alt="Product" />
    </div>
  );
};

export default ProductImage;
