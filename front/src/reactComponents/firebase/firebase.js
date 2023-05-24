//-----------------------Imports -----------------
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const app = initializeApp({
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_STOREAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
});



//-----------export the database------
export const firestore = app.firestore();
export const auth = app.auth();
export const storage = app.storage();

//------- use firebase internal timestamps-------
firestore.settings({ timestampsInSnapshots: true });

//------export the component---------
export default app;
