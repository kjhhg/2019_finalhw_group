import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDnGy9XtSGsIpXAGdlIdxijnj6Qo1HLu3o",
  authDomain: "sweettime-2366b.firebaseapp.com",
  databaseURL: "https://sweettime-2366b.firebaseio.com",
  projectId: "sweettime-2366b",
  storageBucket: "sweettime-2366b.appspot.com",
  messagingSenderId: "495013998711",
  appId: "1:495013998711:web:d4cbbe39fb162db8"
};

firebase.initializeApp(config);

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // console.log("User log in success", user);
      func(true, user)
    } else {
      // console.log("User log in failed", user);
      func(false)
    }
  });
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
