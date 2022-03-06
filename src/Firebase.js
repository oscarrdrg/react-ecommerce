import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCFrBwYOzPv6H1MMUprVI2TV6Mr0EdMbYE",
    authDomain: "react-ecommerce-e0d92.firebaseapp.com",
    projectId: "react-ecommerce-e0d92",
    storageBucket: "react-ecommerce-e0d92.appspot.com",
    messagingSenderId: "875168010164",
    appId: "1:875168010164:web:0bf75daf4e2a9577af6ce1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()

  export {auth}