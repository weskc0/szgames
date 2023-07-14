
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging.js";


const firebaseConfig = {
apiKey: "AIzaSyAbtjH2ZZHD9o4yJ5SRBYZ08JVuKQeUrok",
authDomain: "szgames-d9272.firebaseapp.com",
projectId: "szgames-d9272",
storageBucket: "szgames-d9272.appspot.com",
messagingSenderId: "733530201740",
appId: "1:733530201740:web:e0e6e8f287086121ab65a9"
};
const app = initializeApp(firebaseConfig);

const messaging = getMessaging();


Notification.requestPermission()
.then((permission) => {
if (permission === "granted") {
  console.log('Notification permission granted.');
  return getToken(messaging, { vapidKey: 'BLGbMijNv2SC_E_c-qloKlaJZiqT8O8KSofKXmafvDxhzz_k3qv4Q-SONsOd2V-xEM2U-wOqEiTtMAsG0zb3dZA' });
} else {
  console.log('Notification permission denied.');
  throw new Error('Permission denied');
}
})
.then((currentToken) => {
console.log('FCM token:', currentToken);
// Send the token to your server or handle it as needed
})
.catch((error) => {
console.log('Error requesting permission:', error);
});

self.addEventListener('push', function (event) {
    // Handle push notification event here
    const payload = event.data.json();
    console.log('Push notification received:', payload);
    // Customize handling of the notification based on your needs
});