/**
 * This function will get all the notes in the Firebase database.
 * @param {Object} firebase The Firebase App instance.
 */
const getNotes = firebase => {
  return firebase
    .database()
    .ref("/notes/")
    .once("value")
    .then(snapshot => snapshot.val);
};

export default getNotes;
