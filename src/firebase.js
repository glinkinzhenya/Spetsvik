import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCQ81IJtevfAi4ASc9Nnjg66Tf9DTLLrCw',
  authDomain: 'spetsvik-2000.firebaseapp.com',
  databaseURL: 'https://spetsvik1-deepdive-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'spetsvik-2000',
  storageBucket: 'spetsvik-2000.appspot.com',
  messagingSenderId: '1097423909604',
  appId: '1:1097423909604:web:6e6b80351c005485b4b2f1',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
