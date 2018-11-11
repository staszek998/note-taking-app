import React from "react";
import PropTypes from "prop-types";

const Label = ({
  text = "",
  clickHandler = fn => fn,
  clickable = false,
  active = false
}) => (
  <a
    onClick={() => {
      console.log(`Clicked label: ${text}`);
      clickHandler(text);
    }}
    className={`badge ${
      active ? "badge-success" : "badge-secondary"
    } mr-1 text-white ${clickable ? "clickable" : ""}`}
  >
    {text}
  </a>
);

Label.propTypes = {
  text: PropTypes.string,
  clickHandler: PropTypes.func,
  clickable: PropTypes.bool,
  active: PropTypes.bool
};

export default Label;
