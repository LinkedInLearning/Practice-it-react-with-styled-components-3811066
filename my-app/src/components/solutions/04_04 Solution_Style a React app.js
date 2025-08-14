import styled from "styled-components";
import React from "react";

export const BookList = ({ books }) => (
  <div>
    <h1>My Reading List</h1>
    <div>
      {books.map((book) => (
        <BookDetails key={book.id} book={book} />
      ))}
    </div>
  </div>
);

export const BookDetails = ({ book }) => (
  <div>
    <h2>{book.title}</h2>
    <p>Author: {book.author}</p>
    <p>Year: {book.year}</p>
  </div>
);
