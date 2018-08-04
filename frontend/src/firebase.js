import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDQi-I5ksMTFxBosfK0BSN36-Z4fERuqGo",
  authDomain: "unihacksyd.firebaseapp.com",
  databaseURL: "https://unihacksyd.firebaseio.com",
  projectId: "unihacksyd",
  storageBucket: "unihacksyd.appspot.com",
  messagingSenderId: "900382643731"
};

firebase.initializeApp(config);
export default firebase;