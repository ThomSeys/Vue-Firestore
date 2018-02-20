import firebase from "firebase";
import firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import store from "./store";

firebase.initializeApp({
  apiKey: "AIzaSyBdrNoahDljAhsn4jaYK832nwYWEX1CtvA",
  authDomain: "fir-test-7534b.firebaseapp.com",
  databaseURL: "https://fir-test-7534b.firebaseio.com",
  projectId: "fir-test-7534b",
  storageBucket: "",
  messagingSenderId: "1002700522418"
});

window.firebase = firebase;

export const ui = new firebaseui.auth.AuthUI(firebase.auth());

/**
 * Sync store.state.user with firebase.auth().currentUser
 *
 * This callback is called when firebase.auth() detects user changes,
 * so just update the vuex store with the new user object.
 */
firebase.auth().onAuthStateChanged(user => {
  store.commit("UPDATE_USER", user);
});
