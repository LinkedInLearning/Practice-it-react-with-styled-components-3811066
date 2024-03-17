import React from "react";
import PropTypes from "prop-types";

const SpreadPropsComponent = (props) => {
  return (
    <div>
      <h2>{props.heading}</h2>
      <p>{props.description}</p>
    </div>
  );
};

SpreadPropsComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SpreadPropsComponent;
