import React from "react";
import PropTypes from "prop-types";

import Label from "../Label/Label";

const Note = ({
  title,
  body,
  labels = [],
  pinned = false,
  id,
  deleteHandler = fn => fn,
  editButtonClickHandler = fn => fn,
  togglePinClickHandler = fn => fn
}) => (
  <article className="card">
    <div className="card-body">
      {title ? <h3 className="card-title">{title}</h3> : null}

      {body ? <p className="card-text">{body}</p> : null}
    </div>

    <div className="card-footer">
      {labels.length > 0 ? (
        <div className="row px-2">
          {labels.map((label, index) => (
            <Label key={index} text={label} />
          ))}
        </div>
      ) : null}

      {labels.length > 0 ? <hr /> : null}

      <div className="row">
        <div className="col-auto">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="actions"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Action
            </button>
            <div className="dropdown-menu" aria-labelledby="actions">
              <button
                className="dropdown-item"
                data-toggle="modal"
                data-target="#modal-edit-note"
                onClick={() => editButtonClickHandler(id)}
              >
                Edit
              </button>
              <button
                className="dropdown-item"
                onClick={() => togglePinClickHandler(id)}
              >
                {pinned ? "Unpin" : "Add to pinned"}
              </button>
              <button
                className="dropdown-item"
                onClick={() => deleteHandler(id)}
              >
                Delete
              </button>
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
  labels: PropTypes.arrayOf(PropTypes.string),
  deleteHandler: PropTypes.func,
  id: PropTypes.string,
  editButtonClickHandler: PropTypes.func,
  togglePinClickHandler: PropTypes.func
};

export default Note;
