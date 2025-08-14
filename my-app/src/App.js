import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductDetails from "./components/examples/ProductDetails";
import Parent from "./components/examples/Parent";
import ProductList from "./components/examples/ProductList";

const App = () => {
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default App;
