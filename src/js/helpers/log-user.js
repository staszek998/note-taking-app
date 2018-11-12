/**
 * This function will log in the user into the Firebase App.
 * @param {Object} firebase The Firebase App instance.
 * @param {String} email
 * @param {String} password
 */
const logUser = (firebase, email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      console.log(error.code);
      console.log(error.message);
    });
};

export default logUser;
