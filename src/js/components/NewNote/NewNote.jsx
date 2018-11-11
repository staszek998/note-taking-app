import React from "react";

import NoteEditor from "../NoteEditor/NoteEditor";

const NewNote = () => (
  <div className="modal" tabIndex="-1" role="dialog" id="modal-new-note">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">New note creation</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <NoteEditor />
        </div>
        <div className="modal-footer d-flex justify-content-between">
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-success"
            data-dismiss="modal"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default NewNote;
