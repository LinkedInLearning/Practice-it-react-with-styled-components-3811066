import React from "react";
import BookDetails from "./BookDetails";
import books from "./bookData";
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

const Wrapper = styled.div`
  background-color: lightgray;
  padding: 10%;
`;
const Title = styled.h1`
  color: darkgreen;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  align-items: center;
  gap: 5%;
`;
export default BookList;
