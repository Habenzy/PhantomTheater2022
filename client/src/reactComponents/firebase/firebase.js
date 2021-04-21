//-----------------------Imports -----------------
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import dotenv from 'dotenv'
dotenv.config()

//---------configure firebase--------
const app = firebase.initializeApp({
  apiKey: 'process.env.REACT_APP_FIREBASE_API_KEY',
  authDomain: 'phantom-database-ee13a.firebaseapp.com',
  databaseURL: 'https://phantom-database-ee13a.firebaseio.com',
  projectId: 'phantom-database-ee13a',
  storageBucket: 'phantom-database-ee13a.appspot.com',
  messagingSenderId: '915188435781',
  appId: '1:915188435781:web:f47068e4ba636fb18a4c2c',
});

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STOREAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

//-----------export the database------
export const firestore = app.firestore();
export const auth = app.auth();
export const storage = app.storage();

//------- use firebase internal timestamps-------
firestore.settings({ timestampsInSnapshots: true });

//------export the component---------
export default app;
