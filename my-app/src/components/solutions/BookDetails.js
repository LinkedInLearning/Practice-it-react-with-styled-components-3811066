import React from "react";
import styled from "styled-components";
const BookDetails = ({ book }) => {
  return (
    <BookContainer>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
    </BookContainer>
  );
};

const BookContainer = styled.div`
background-color: white;
  width: 300px;
  border: 2px solid black;
  border-radius: 10px;
  margin: 10px;

`;

export default BookDetails;
