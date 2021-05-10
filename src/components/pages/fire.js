import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyD5s8CPE53OO747SoSEA36WOpwc2J77QKc",
    authDomain: "form2-accf3.firebaseapp.com",
    projectId: "form2-accf3",
    storageBucket: "form2-accf3.appspot.com",
    messagingSenderId: "31364164456",
    appId: "1:31364164456:web:3257304b55eecac079c4dd"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;