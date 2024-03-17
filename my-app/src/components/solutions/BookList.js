import React from "react";
import BookDetails from "./BookDetails";
import books from "../challanges/bookData";
import styled from "styled-components";

const BookList = () => {
  return (
    <Wrapper>
      <Title>My Reading List</Title>
      <Grid>
        {books.map((book) => (
          <BookDetails key={book.id} book={book} />
        ))}
      </Grid>
    </Wrapper>
  );
};



/////CHALLANGE 4 SOLUTION/////

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  align-items: center;
  justify-content: center;
  gap: 5%;
`;
const Wrapper = styled.div`
  height: 100vh;
  overflow: scroll;
  background-color: lightgray;
`;

const Title = styled.h1`
  margin: 0;
  color: darkgreen;
  text-align: center;
`;

export default BookList;
