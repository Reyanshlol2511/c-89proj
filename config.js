import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCn1qqoLXL_-nbbAB__S0FeIKYm2ongFt0",
  authDomain: "barter-app-acea5.firebaseapp.com",
  projectId: "barter-app-acea5",
  storageBucket: "barter-app-acea5.appspot.com",
  messagingSenderId: "300352590538",
  appId: "1:300352590538:web:44a16287613ab736cb5a33"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
