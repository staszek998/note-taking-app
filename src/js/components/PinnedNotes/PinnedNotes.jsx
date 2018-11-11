import React from "react";
import PropTypes from "prop-types";

import Note from "../Note/Note";

const PinnedNotes = ({
  notes = [],
  deleteHandler = fn => fn,
  editButtonClickHandler = fn => fn,
  togglePinClickHandler = fn => fn
}) => (
  <section className="card">
    <div className="card-body">
      <h2 className="card-title">
        <i className="fas fa-thumbtack" /> Pinned notes
      </h2>

      {notes.length > 0 ? (
        <div className="row">
          {notes.map((note, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3 mt-3">
              <Note
                {...note}
                deleteHandler={deleteHandler}
                editButtonClickHandler={editButtonClickHandler}
                togglePinClickHandler={togglePinClickHandler}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  </section>
);

PinnedNotes.propTypes = {
  notes: PropTypes.array,
  deleteHandler: PropTypes.func,
  editButtonClickHandler: PropTypes.func,
  togglePinClickHandler: PropTypes.func
};

export default PinnedNotes;
