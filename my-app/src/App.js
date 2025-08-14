import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductDetails from "./components/examples/ProductDetails";
import Parent from "./components/examples/Parent";
import ProductList from "./components/examples/ProductList";
import GlobalStyles from "./components/examples/GlobalStyles";
import { BookList } from "./components/solutions/04_04 Solution_Style a React app";

const App = () => {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },

    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
    {
      id: 4,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
    },
    {
      id: 5,
      title: "One Hundred Years of Solitude",
      author: "Gabriel Garcia Marquez",
      year: 1967,
    },
  ];

  return (
    <div>
      <GlobalStyles />
      <BookList books={books} />
      {/* <Parent/> */}
      {/* <ProductList/> */}
    </div>
  );
};

export default App;
