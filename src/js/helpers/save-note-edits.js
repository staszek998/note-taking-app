/**
 * This function will save the edited note in the Firebase database.
 * @param {Object} note The note to save.
 * @param {Object} firebase The Firebase App instance.
 */
const saveNoteEdits = (note, firebase) => {
  firebase
    .database()
    .ref("notes/" + note.id)
    .set({ ...note })
    .then(() => {
      console.log("Saved!");
      return true;
    });
};

export default saveNoteEdits;
