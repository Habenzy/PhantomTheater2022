//-----------------------Imports -----------------
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

//---------configure firebase--------
const app =  firebase.initializeApp({
   apiKey: 'process.env.FIREBASE_KEY',
   authDomain: 'phantom-database-ee13a.firebaseapp.com',
   databaseURL: 'https://phantom-database-ee13a.firebaseio.com',
   projectId: 'phantom-database-ee13a',
   storageBucket: 'phantom-database-ee13a.appspot.com',
   messagingSenderId: '915188435781',
   appId: '1:915188435781:web:f47068e4ba636fb18a4c2c'
});


//-----------export the database------
export const firestore = app.firestore();
export const auth = app.auth();
export const storage = app.storage();

//------- use firebase internal timestamps-------
firestore.settings({ timestampsInSnapshots: true });

//------export the component---------
export default app;
