import React from "react";
import BookDetails from "./BookDetails";
import books from "./bookData";

const BookList = () => {
  return (
    <div>
      <h1>Book List</h1>
      {books.map((book) => (
        <BookDetails key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
