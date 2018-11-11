const uuidv4 = require("uuid/v4");

const createTestNote = (title, body, labels, pinned) => {
  return {
    title,
    body,
    labels,
    id: uuidv4(),
    pinned
  };
};

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugit, doloribus provident laboriosam pariatur facere id aut tempore eos perspiciatis inventore iure aspernatur molestiae, at voluptates aperiam, quibusdam hic. Temporibus.";

const testNote1 = createTestNote(
  "This is the 1st note title",
  lorem,
  ["label-1"],
  true
);

const testNote2 = createTestNote(
  "This is the 2nd note title",
  lorem,
  ["label-1", "label-2"],
  false
);

const testNote3 = createTestNote(
  "This is the 3rd note title",
  lorem,
  ["label-2", "label-3"],
  true
);

const testNote4 = createTestNote(
  "This is the 4th note title",
  lorem,
  ["label-3", "label-4"],
  false
);

const testNote5 = createTestNote(
  "This is the 5th note title",
  lorem,
  ["label-4", "label-5"],
  false
);

const testNote6 = createTestNote(
  "This is the 6th note title",
  lorem,
  ["label-5", "label-6"],
  false
);

const testNote7 = createTestNote(
  "This is the 7th note title",
  lorem,
  ["label-6"],
  false
);

const testNotes = [
  testNote1,
  testNote2,
  testNote3,
  testNote4,
  testNote5,
  testNote6,
  testNote7
];

export default testNotes;
