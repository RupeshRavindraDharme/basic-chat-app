import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMW8YQCRZBQNwCuNLy1NJvuXuT7PfOras",
    authDomain: "chatapp-2a596.firebaseapp.com",
    projectId: "chatapp-2a596",
    storageBucket: "chatapp-2a596.appspot.com",
    messagingSenderId: "221610430447",
    appId: "1:221610430447:web:ef3dc7ee030809e778301a",
    measurementId: "G-MZSVSPT849"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const database =app.firestore();

  export default database;