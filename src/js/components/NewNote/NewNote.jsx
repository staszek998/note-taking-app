import React from "react";
import PropTypes from "prop-types";

// import NoteEditor from "../NoteEditor/NoteEditor";

const NewNote = ({ submitHandler = fn => fn }) => {
  let _title, _body, _labels;

  return (
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
            <form>
              <div className="form-group">
                <label htmlFor="note-title">Note title</label>
                <input
                  type="text"
                  name="note-title"
                  id="note-title"
                  className="form-control"
                  ref={input => (_title = input)}
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
                  ref={textarea => (_body = textarea)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="labels">Labels</label>
                <input
                  type="text"
                  name="labels"
                  id="labels"
                  className="form-control"
                  ref={input => (_labels = input)}
                />
                <small className="form-text">
                  Multiple labels should be divided by comma
                </small>
              </div>
            </form>
          </div>
          <div className="modal-footer d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-success"
              data-dismiss="modal"
              onClick={() => {
                submitHandler(_title.value, _body.value, [
                  ..._labels.value.split(", ")
                ]);
                _title.value = "";
                _body.value = "";
                _labels.value = "";
              }}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

NewNote.propTypes = {
  submitHandler: PropTypes.func
};

export default NewNote;
