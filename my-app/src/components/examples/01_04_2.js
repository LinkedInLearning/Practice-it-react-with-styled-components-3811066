import React, { useState } from "react";

const DynamicUpdateComponent = () => {

const [count, setCount] = useState(0);

const handleIncrement = ()=> {
  setCount(count + 1);
}

return (

  <div>
    <p>Count: {count}</p>
    <button onClick={handleIncrement}>Increment</button>
  </div>
);

};  

export default DynamicUpdateComponent;
