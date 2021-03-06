import React, { Component } from "react";

// JSX components
import AllNotes from "./components/AllNotes/AllNotes";
import EditNote from "./components/EditNote/EditNote";
import CurrentView from "./components/CurrentView/CurrentView";
import Labels from "./components/Labels/Labels";
import NewNote from "./components/NewNote/NewNote";
import PinnedNotes from "./components/PinnedNotes/PinnedNotes";
import Search from "./components/Search/Search";

// Database
import testNotes from "./db/test-notes";

// Helpers
import search from "./helpers/search";
import getLabels from "./helpers/get-labels";
import filterByLabels from "./helpers/filter-by-labels";
import createCurrentView from "./helpers/current-view";

const uuidv4 = require("uuid/v4");

class Main extends Component {
  state = {
    notes: testNotes,
    searchParams: { query: "", scope: "" },
    labelsToShow: [],
    currentlyEditedNote: {}
  };

  /**
   * This function will set the search parameters which will be further applied when filtering the notes.
   * @param {String} query The search query to apply.
   * @param {String} scope The scope where the search query should be applied to.
   */
  setSearchParams = (query, scope) => {
    this.setState({
      searchParams: {
        query,
        scope
      }
    });
  };

  /**
   * This function will add or remove the clicked label to or from the labelsToShow array.
   * @param {String} label
   */
  handleTheLabelCLick = label => {
    if (this.state.labelsToShow.indexOf(label) === -1) {
      this.setState({
        labelsToShow: [...this.state.labelsToShow, label]
      });
    } else {
      this.setState({
        labelsToShow: this.state.labelsToShow.filter(
          currentLabel => currentLabel !== label
        )
      });
    }
  };

  /**
   * This function returns the notes array based on the currently selected search parameters.
   */
  filterBySearchParams = () => {
    return this.state.searchParams.query !== ""
      ? search(
          this.state.notes,
          this.state.searchParams.query,
          this.state.searchParams.scope
        )
      : this.state.notes;
  };

  /**
   * This function will add a new note to the notes array.
   * @param {String} title
   * @param {String} body
   * @param {String[]} labels
   */
  createNewNote = (title, body, labels) => {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          title,
          body,
          labels,
          id: uuidv4()
        }
      ]
    });
  };

  /**
   * This function will delete note of the given ID.
   * @param {String} idToDelete
   */
  deleteNote = idToDelete => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== idToDelete)
    });
  };

  /**
   * This function will change the actively edited note. This will allow the population of the EditNote's form with the edited note details.
   * @param {String} editedNoteId
   */
  setTheEditedNote = editedNoteId => {
    this.setState({
      currentlyEditedNote: this.state.notes.find(
        note => note.id === editedNoteId
      )
    });
  };

  /**
   * This function will perform the edition of the note with the given ID.
   * @param {String} idToEdit
   * @param {String} title
   * @param {String} body
   * @param {String[]} labels
   */
  editNote = (idToEdit, title, body, labels) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if (note.id === idToEdit) {
          return {
            ...note,
            title,
            body,
            labels
          };
        } else {
          return note;
        }
      })
    });
  };

  /**
   * This function will toggle the 'pinned' attribute of the note with the given ID.
   * @param {String} idToToggle
   */
  togglePin = idToToggle =>
    this.setState({
      notes: this.state.notes.map(note =>
        note.id === idToToggle ? { ...note, pinned: !note.pinned } : note
      )
    });

  render() {
    const notesToRender =
      this.state.labelsToShow.length > 0
        ? filterByLabels(this.filterBySearchParams(), this.state.labelsToShow)
        : this.filterBySearchParams();

    const labelsToRender = getLabels(this.state.notes);

    return (
      <main className="container">
        {/* Top row */}
        <div className="row justify-content-between">
          <div className="col-12 col-lg-7 order-lg-2">
            <Search submitHandler={this.setSearchParams} />
          </div>
          <div className="col-12 col-lg-5 order-lg-1">
            <h1 className="display-1">Notes</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <CurrentView
              currentView={createCurrentView(
                this.state.searchParams,
                this.state.labelsToShow
              )}
            />
          </div>
        </div>

        {/* Pinned notes */}
        <div className="row">
          <div className="col">
            <PinnedNotes
              notes={notesToRender.filter(note => note.pinned)}
              deleteHandler={this.deleteNote}
              editButtonClickHandler={this.setTheEditedNote}
              togglePinClickHandler={this.togglePin}
            />
          </div>
        </div>

        {/* All notes */}
        <div className="row">
          <div className="col">
            <AllNotes
              notes={notesToRender}
              deleteHandler={this.deleteNote}
              editButtonClickHandler={this.setTheEditedNote}
              togglePinClickHandler={this.togglePin}
            />
          </div>
        </div>

        {/* Labels */}
        <div className="row mb-5">
          <div className="col">
            <Labels
              labels={labelsToRender}
              labelClickHandler={this.handleTheLabelCLick}
              labelsToShow={this.state.labelsToShow}
            />
          </div>
        </div>

        {/* Floating new note (+) button */}
        <button
          className="btn btn-lg btn-primary rounded-circle shadow mr-5 mb-5 floating-button"
          data-toggle="modal"
          data-target="#modal-new-note"
        >
          <i className="fas fa-plus" />
        </button>

        <NewNote submitHandler={this.createNewNote} />
        <EditNote
          editHandler={this.editNote}
          currentlyEditedNote={this.state.currentlyEditedNote}
        />
      </main>
    );
  }
}

export default Main;
