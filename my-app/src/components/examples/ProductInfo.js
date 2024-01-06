import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProductInfo = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: {props.price}</p>
    </div>
  );
};

ProductInfo.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductInfo;
