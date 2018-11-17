/**
 * This function will return the array of strings containing unique labels.
 * @param {Array} notes Array of notes.
 */
const getLabels = notes => {
  const allLabels = notes.map(note => note.labels.split(", ")).flat();

  const uniqueLabels = allLabels.reduce((alreadyFoundLabels, currentLabel) => {
    return alreadyFoundLabels.indexOf(currentLabel) === -1
      ? [...alreadyFoundLabels, currentLabel]
      : alreadyFoundLabels;
  }, []);

  return uniqueLabels;
};

export default getLabels;
