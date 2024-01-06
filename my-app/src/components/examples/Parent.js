import React, { useState } from "react";
import Child from "./Child";
import SpreadPropsComponent from "./SpreadPropsComponent";

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const propsObject = {
    heading: "Welcome to React Spreading",
    description: "Learn about prop spreading in React.",
    // Additional props
  };

  return (
    <>
      <SpreadPropsComponent {...propsObject} />
      <Child count={count} onIncrement={handleIncrement} />;
    </>
  );
};

export default Parent;
