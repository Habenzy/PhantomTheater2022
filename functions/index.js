/* eslint-disable linebreak-style */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  console.log("test from cloud function");
  response.send("Hello, again from Firebase!");
});


exports.getArtist = functions.https.onRequest((request, response) => {
  admin.firestore().doc("shows/Ho8MxRK7d5GaGk2XjLHC").get().then((snapshot) => {
    const data = snapshot.data();
    response.send(data);
  }).catch((error) => {
    console.log(error);
    response.status(500).send("Error occurred: " + error);
  });
});


exports.getDates = functions.https.onRequest((request, response) => {
  admin.firestore().doc("shows/Ho8MxRK7d5GaGk2XjLHC").get()
      .then((snapshot) => {
        const data = snapshot.data();
        response.send(data.dates);
      })
      .catch((error) => {
        console.log(error);
        response.status(500).send("Error Occurred");
      });
});


// firestore trigger for updates

exports.sortDates = functions.firestore.document("/shows/{id}")
    .onUpdate((snapshot, context) => {
      const id = context.params.id;


      console.log(snapshot.dates);
      console.log(id);

      return null;
    }
    );
