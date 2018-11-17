import React from "react";
import PropTypes from "prop-types";

import Label from "../Label/Label";

const Labels = ({
  labels = [],
  labelClickHandler = fn => fn,
  labelsToShow = []
}) => (
  <section className="card mt-4">
    <div className="card-body">
      <h2 className="card-title">
        <i className="fas fa-tag" /> Labels
      </h2>

      {labels.map(label => (
        <Label
          key={label}
          text={label}
          clickHandler={labelClickHandler}
          clickable={true}
          active={labelsToShow.indexOf(label) !== -1}
        />
      ))}
    </div>
  </section>
);

Labels.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  labelClickHandler: PropTypes.func,
  labelsToShow: PropTypes.array
};

export default Labels;
