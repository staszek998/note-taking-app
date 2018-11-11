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

const testNote1 = createTestNote(
  "Meeting with Peter",
  `The meeting was fast. Incredibly fast and short. I didn't even have time to write any notes from it.`,
  ["meeting", "time", "speed"],
  true
);

const testNote2 = createTestNote(
  "Baked Salmon",
  ` It doesn't get much easier than this Easy 5 Ingredient Baked Salmon with a garlic, lemon, and dill butter sauce. All it takes is 5 ingredients and 20 minutes of your time. So simple, so flavorful!
  Yield: 4 Servings
  Calories: 376 kcal
  Ingredients
  
      1 salmon filet
      1/2 cup salted butter melted
      4 tablespoons fresh lemon juice
      8 garlic cloves crushed
      2 tablespoons finely chopped fresh dill
  
  US Customary - Metric
  Instructions
  
      Preheat oven to 375 degrees. Line a 4 sided baking sheet with aluminum foil. Place the salmon in the middle of the foil.
      In a glass measuring cup, combine melted butter, lemon juice, garlic, and dill. Whisk together.
      Pour butter mixture directly over salmon. Pull the sides and ends of the aluminum foil up and pinch together, covering the salmon completely.
      Bake in the preheated oven for 15-20 minutes, or until the salmon flakes easily with a fork.`,
  ["recipe", "baking", "salmon"],
  false
);

const testNote3 = createTestNote(
  "Meeting with Mom",
  `- buy flowers
  - prepare the speech
  - dress a suit`,
  ["meeting", "mom", "scary", "love"],
  false
);

const testNote4 = createTestNote(
  "Chocolate Cookies",
  `Preheat oven to 350 degrees F (175 degrees C).
  In a large bowl, cream together margarine and sugar until smooth. Beat in eggs one at a time, then stir in the vanilla. Combine flour, cocoa, baking soda, and salt; stir into the creamed mixture until just blended. Mix in walnuts. Drop by spoonfuls onto ungreased cookie sheets.
  Bake for 8 to 10 minutes in the preheated oven. Cool for a couple of minutes on the cookie sheet before transferring to wire racks to cool completely.`,
  ["recipe", "baking", "cookies", "chocolate"],
  true
);

const testNotes = [testNote1, testNote2, testNote3, testNote4];

export default testNotes;
