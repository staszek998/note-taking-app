/**
 * This function will return the modeled string informing the User of the currently selected filters.
 * @param {Object} searchParams The object containing the current search parameters.
 * @param {String[]} labels The array of currently selected labels.
 */
const createCurrentView = (
  searchParams = { query: "", scope: "" },
  labels = []
) => {
  let message = "";

  if (searchParams.query === "" && labels.length === 0) {
    message = "All notes";
  } else {
    if (searchParams.query !== "") {
      message = `Messages with the '${searchParams.query}' in `;
      switch (searchParams.scope) {
        case "title":
          message += "the title";
          break;
        case "body":
          message += "the message body";
          break;
        case "both":
          message += "the title or the message body";
          break;
        default:
          break;
      }

      if (labels.length !== 0) {
        message += ` and with the labels: ${labels.join(", ")}`;
      }
    } else if (labels.length !== 0) {
      message = `Messages with the labels: ${labels.join(", ")}`;
    }
  }

  return message;
};

export default createCurrentView;
