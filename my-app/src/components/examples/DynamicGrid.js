import React from "react";
import styled from "styled-components";

const DynamicGrid = ({ items }) => {
  return (
    <GridContainer numItems={items.length}>
      {items.map((item, index) => (
        <GridItem key={index}>{item}</GridItem>
      ))}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ numItems }) =>
    numItems > 4 ? "repeat(4, 1fr)" : "repeat(3, 1fr)"};
  gap: 15px;
`;

const GridItem = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
`;
export default DynamicGrid;
