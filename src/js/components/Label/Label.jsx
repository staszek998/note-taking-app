import React from "react";
import PropTypes from "prop-types";

const Label = ({
  text = "",
  clickHandler = fn => fn,
  clickable = false,
  active = false
}) => (
  <button
    onClick={() => {
      console.log(`Clicked label: ${text}`);
      clickHandler(text);
    }}
    className={`btn btn-sm ${
      active ? "btn-success" : "btn-secondary"
    } mr-1 text-white ${clickable ? "clickable" : ""}`}
  >
    {text}
  </button>
);

Label.propTypes = {
  text: PropTypes.string,
  clickHandler: PropTypes.func,
  clickable: PropTypes.bool,
  active: PropTypes.bool
};

export default Label;
