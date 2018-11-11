import React from "react";
import PropTypes from "prop-types";

import Note from "../Note/Note";

const PinnedNotes = ({ notes = [] }) => (
  <section className="card">
    <div className="card-body">
      <h2 className="card-title">
        <i className="fas fa-thumbtack" /> Pinned notes
      </h2>

      {notes.length > 0 ? (
        <div className="row">
          {notes.map(note => (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-3">
              <Note key={note.id} {...note} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  </section>
);

PinnedNotes.propTypes = {
  notes: PropTypes.array
};

export default PinnedNotes;
