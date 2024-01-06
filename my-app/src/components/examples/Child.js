import React from "react";
import PropTypes from "prop-types";

const Child = (props) => {
  return (
    <div>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrement}>Increment</button>
    </div>
  );
};

Child.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default Child;
