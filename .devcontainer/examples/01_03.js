import React, { useState } from "react";

const ButtonCounter = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="app">
      <h1>Button Counter</h1>
      <button onClick={handleButtonClick}>Click me</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default ButtonCounter;
