import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductDetails from "./components/examples/ProductDetails";
import Parent from "./components/examples/Parent";
import ProductList from "./components/examples/ProductList";
import GlobalStyles from "./components/examples/GlobalStyles";

const App = () => {

  return (
    <div>
      <GlobalStyles />
      <h1>Global Styles Example</h1>

      <ProductList />
    </div>
  );
};

export default App;
