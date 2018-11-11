import React from "react";
import PropTypes from "prop-types";

const Label = ({ text }) => (
  <span className="badge badge-secondary">{text}</span>
);

Label.propTypes = {
  text: PropTypes.string
};

export default Label;
