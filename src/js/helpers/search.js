/**
 * This function will handle the filtering of the passed-in notes array.
 * @param {Array} notes The array of all the notes in the app's store.
 * @param {String} query The search query to apply.
 * @param {String} scope The scope where the search query should be applied to.
 */
const search = (notes, query, scope) => {
  switch (scope) {
    case "body":
      return notes.filter(note =>
        note.body.toLowerCase().indexOf(query.toLowerCase()) !== -1
          ? true
          : false
      );
    case "title":
      return notes.filter(note =>
        note.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
          ? true
          : false
      );
    case "both":
      return notes.filter(note =>
        (note.body.toLowerCase().indexOf(query) !== -1 ||
          note.title.toLowerCase().indexOf(query)) !== -1
          ? true
          : false
      );
    default:
      return notes;
  }
};

export default search;
