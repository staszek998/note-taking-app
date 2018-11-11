import React from "react";

const NoteEditor = () => (
  <form>
    <div className="form-group">
      <label htmlFor="note-title">Note title</label>
      <input
        type="text"
        name="note-title"
        id="note-title"
        className="form-control"
      />
    </div>

    <div className="form-group">
      <label htmlFor="note-body">Note body</label>
      <textarea
        name="note-body"
        id="note-body"
        cols="30"
        rows="10"
        className="form-control"
      />
    </div>

    <div className="form-group">
      <label htmlFor="labels">Labels</label>
      <input type="text" name="labels" id="labels" className="form-control" />
      <small className="form-text">
        Multiple labels should be divided by comma
      </small>
    </div>
  </form>
);

export default NoteEditor;
