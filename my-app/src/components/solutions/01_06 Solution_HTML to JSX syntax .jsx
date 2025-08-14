import React, { useState } from "react";

// Counter component
export function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <button onClick={handleIncrement}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

// App component that renders Counter
function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );

}