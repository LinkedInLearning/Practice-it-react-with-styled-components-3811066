import styled from "styled-components";
import React from "react";

export const BookList = ({ books }) => (
  <Wrapper>
    <Title>My Reading List</Title>
    <Grid>
      {books.map((book) => (
        <BookDetails key={book.id} book={book} />
      ))}
    </Grid>
  </Wrapper>
);

export const BookDetails = ({ book }) => (
  <BookContainer>
    <h2>{book.title}</h2>
    <p>Author: {book.author}</p>
    <p>Year: {book.year}</p>
  </BookContainer>
);

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const BookContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    color: #2c3e50;
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  p {
    color: #666;
    margin: 5px 0;
  }
`;
