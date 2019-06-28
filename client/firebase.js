  import * as firebase from 'firebase'

  const config = {
    apiKey: "AIzaSyApvedfJSIl_xwbm9s7NMbgljk7m3TazFg",
    authDomain: "fetchmvp.firebaseapp.com",
    databaseURL: "https://fetchmvp.firebaseio.com",
    projectId: "fetchmvp",
    storageBucket: "",
    messagingSenderId: "670206772809",
    appId: "1:670206772809:web:4432daa6a097ea9d"
  };

  firebase.initializeApp(config);

  const db = firebase.database()
  const auth = firebase.auth

  export {db, auth}
