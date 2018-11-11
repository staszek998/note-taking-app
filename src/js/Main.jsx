import React, { Component } from "react";

import AllNotes from "./components/AllNotes/AllNotes";
// import EditNote from "./components/EditNote/EditNote";
import Header from "./components/Header/Header";
import Labels from "./components/Labels/Labels";
import NewNote from "./components/NewNote/NewNote";
import PinnedNotes from "./components/PinnedNotes/PinnedNotes";
import Search from "./components/Search/Search";

const testNote = {
  title: `I'm the note's title`,
  body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo consectetur assumenda deleniti, distinctio est error illo ut odit at vero, quidem, corrupti sed incidunt eius numquam. Molestiae quod delectus repudiandae?`,
  labels: ["label-1", "label-2", "label-3"],
  id: "123456789",
  pinned: true
};

class Main extends Component {
  render() {
    return (
      <main className="container">
        {/* Top row */}
        <div className="row justify-content-between">
          <div className="col-12 col-lg-auto order-lg-2">
            <Search />
          </div>
          <div className="col-12 col-lg-auto order-lg-1">
            <Header />
          </div>
        </div>

        {/* Pinned notes */}
        <div className="row">
          <div className="col">
            <PinnedNotes notes={[testNote, testNote, testNote, testNote]} />
          </div>
        </div>

        {/* All notes */}
        <div className="row">
          <div className="col">
            <AllNotes />
          </div>
        </div>

        {/* Labels */}
        <div className="row">
          <div className="col">
            <Labels />
          </div>
        </div>

        {/* Floating new note (+) button */}
        <div className="container new-note-button position-fixed fixed-bottom">
          <div className="row justify-content-end">
            <div className="col-auto">
              <button
                className="btn btn-lg btn-primary rounded-circle shadow mr-5 mb-5"
                data-toggle="modal"
                data-target="#modal-new-note"
              >
                <i className="fas fa-plus" />
              </button>
            </div>
          </div>
        </div>

        <NewNote />
      </main>
    );
  }
}

export default Main;
