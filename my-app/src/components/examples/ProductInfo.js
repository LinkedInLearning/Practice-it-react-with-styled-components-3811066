import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProductInfo = ({ product }) => {
  return (
    <InfoContainer>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.price}</ProductPrice>
    </InfoContainer>
  );
};

ProductInfo.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

/////04_01 EXAMPLE////

const InfoContainer = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ProductName = styled.h2`
  color: #333;
`;

const ProductPrice = styled.p`
  color: #008080;
  font-weight: bold;
`;
export default ProductInfo;
