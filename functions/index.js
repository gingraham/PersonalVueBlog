
const functions = require("firebase-functions");
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');
admin.initializeApp();

// Create an HTTP function to add an admin role
exports.addAdminRole = functions.https.onCall((data, context) => {
  // Use the cors middleware to handle CORS headers.
  return admin.auth().getUserByEmail(data.email)
  .then((user) => {
    return admin.auth().setCustomUserClaims(user.uid, {
      admin: true,
    });
  })
  .then(() => {
    return {
      message: `Success! ${data.email} has been made an admin!`
    };
  })
  .catch(err => {
    console.log(err);
  });
});
