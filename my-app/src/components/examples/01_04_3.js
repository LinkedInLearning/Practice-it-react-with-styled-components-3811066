import React, { useState } from "react";

const ConditionalRenderComponent = () => {
  const [showMessage, setShowMessage] = useState(true);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      {showMessage && <p>This message is dynamically rendered!</p>}
      <button onClick={toggleMessage}>
        {showMessage ? "Hide Message" : "Show Message"}
      </button>
    </div>
  );
};

export default ConditionalRenderComponent;
