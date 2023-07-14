import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getMessaging } from "firebase/messaging";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAbtjH2ZZHD9o4yJ5SRBYZ08JVuKQeUrok",
    authDomain: "szgames-d9272.firebaseapp.com",
    projectId: "szgames-d9272",
    storageBucket: "szgames-d9272.appspot.com",
    messagingSenderId: "733530201740",
    appId: "1:733530201740:web:e0e6e8f287086121ab65a9"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);


const messaging = firebase.messaging();
messaging.requestPermission()
  .then(() => {
    console.log('Notification permission granted.');
    return messaging.getToken();
  })
  .then((token) => {
    console.log('FCM token:', token);
    // Send the token to your server or handle it as needed
  })
  .catch((error) => {
    console.log('Error requesting permission:', error);
  });


  messaging.onMessage((payload) => {
    console.log('Notification received:', payload);
    // Handle the notification and update your UI as needed
  });
  
  messaging.onMessage((payload) => {
    console.log('Notification received:', payload);
    // Handle the notification and update your UI as needed
  });