import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductDetails from "./components/examples/ProductDetails";
import Parent from "./components/examples/Parent";

const App = () => {
  return (
    <div>
      <ProductDetails />
      <Parent />
    </div>
  );
};

export default App;
