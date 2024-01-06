// SpreadPropsComponent.js
import React from "react";
import PropTypes from "prop-types";

const SpreadPropsComponent = (props) => {
  return (
    <div>
      <h2>{props.heading}</h2>
      <p>{props.description}</p>
      {/* Additional content here */}
    </div>
  );
};

SpreadPropsComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // Additional prop types
};

export default SpreadPropsComponent;
