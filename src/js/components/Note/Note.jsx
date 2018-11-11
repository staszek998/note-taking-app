import React from "react";
import PropTypes from "prop-types";

import Label from "../Label/Label";

const Note = ({ title, body, labels = [], pinned = false }) => (
  <article className="card">
    <div className="card-body">
      {title ? <h3 className="card-title">{title}</h3> : null}

      {body ? <p className="card-text">{body}</p> : null}
    </div>

    <div className="card-footer">
      {labels.length > 0 ? (
        <div className="row px-2">
          {labels.map((label, index) => (
            <div className="col-auto px-1">
              <Label key={index} text={label} />
            </div>
          ))}
        </div>
      ) : null}

      {labels.length > 0 ? <hr /> : null}

      <div className="row">
        <div className="col-auto">
          <div class="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="actions"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Action
            </button>
            <div className="dropdown-menu" aria-labelledby="actions">
              <button className="dropdown-item">Edit</button>
              <button className="dropdown-item">
                {pinned ? "Unpin" : "Add to pinned"}
              </button>
              <button className="dropdown-item">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
);

Note.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  labels: PropTypes.array
};

export default Note;
