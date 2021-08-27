import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDFFTgcQo6NLg4cOmOhz8ARULZ3Dbn5vUo",
  authDomain: "complaint-forum-6b3fa.firebaseapp.com",
  projectId: "complaint-forum-6b3fa",
  storageBucket: "complaint-forum-6b3fa.appspot.com",
  messagingSenderId: "906641418166",
  appId: "1:906641418166:web:60b348ef3c8fdad4054317" 
};
const app = initializeApp(firebaseConfig);

export default firebase.firestore()
