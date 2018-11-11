import React, { Component } from "react";
import PropTypes from "prop-types";

class EditNote extends Component {
  state = {
    title: "",
    body: "",
    labels: ""
  };

  static propTypes = {
    currentlyEditedNote: PropTypes.object,
    editHandler: PropTypes.func
  };

  static defaultProps = {
    currentlyEditedNote: {
      id: "",
      title: "",
      body: "",
      labels: []
    },
    editHandler: fn => fn
  };

  UNSAFE_componentWillReceiveProps = newProps =>
    this.setState({
      title: newProps.currentlyEditedNote.title,
      body: newProps.currentlyEditedNote.body,
      labels:
        newProps.currentlyEditedNote.labels !== undefined
          ? newProps.currentlyEditedNote.labels.join(", ")
          : ""
    });

  render() {
    return (
      <div className="modal" tabIndex="-1" role="dialog" id="modal-edit-note">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Note editing</h5>
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
                    value={this.state.title}
                    onChange={event =>
                      this.setState({
                        title: event.currentTarget.value
                      })
                    }
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
                    value={this.state.body}
                    onChange={event =>
                      this.setState({
                        body: event.currentTarget.value
                      })
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="labels">Labels</label>
                  <input
                    type="text"
                    name="labels"
                    id="labels"
                    className="form-control"
                    value={this.state.labels}
                    onChange={event =>
                      this.setState({
                        labels: event.currentTarget.value
                      })
                    }
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
                Discard
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={() =>
                  this.props.editHandler(
                    this.props.currentlyEditedNote.id,
                    this.state.title,
                    this.state.body,
                    this.state.labels.split(", ")
                  )
                }
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditNote;
