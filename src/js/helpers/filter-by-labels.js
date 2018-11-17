/**
 * This function takes the array of app's notes and the array of labels. It will return the filtered array of notes, based on the given labels.
 * @param {Array} notes The array of all the app's notes.
 * @param {String[]} labels The array of labels.
 */
const filterByLabels = (notes, labelsToShow) => {
  //  This filter() implementation will return only these notes instances that contain at least one label from the specifies 'labels' array.
  return notes.filter(note =>
    // This some() implementation will check if the note contains at least one of the specified labels. It will store their quantity in the array and return its length.
    note.labels.split(", ").some(label => labelsToShow.indexOf(label) !== -1)
  );
};

export default filterByLabels;
