import React, { useState } from "react";

const DynamicDataComponent = () => {
  const [data, setData] = useState(["Item 1", "Item 2", "Item 3"]);

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default DynamicDataComponent;

