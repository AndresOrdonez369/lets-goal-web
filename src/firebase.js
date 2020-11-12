import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyA5qWjIQTtMOYODGxPgvbl3juGU0GCfasI",
  authDomain: "let-s-goal-web.firebaseapp.com",
  databaseURL: "https://let-s-goal-web.firebaseio.com",
  projectId: "let-s-goal-web",
  storageBucket: "let-s-goal-web.appspot.com",
  messagingSenderId: "1050387670604",
  appId: "1:1050387670604:web:c99cb5409ed7e4f24036e9",
  measurementId: "G-HYXTWTBRWD"
};
firebase.initializeApp(config);

export default firebase;