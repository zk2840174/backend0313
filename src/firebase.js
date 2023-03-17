import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpde8lqdlB_ibIXSfewgE7RivuKkGjZhE",
  authDomain: "reacttest1-985b5.firebaseapp.com",
  projectId: "reacttest1-985b5",
  storageBucket: "reacttest1-985b5.appspot.com",
  messagingSenderId: "814756112200",
  appId: "1:814756112200:web:981f7dff59c6b6c359f57d",
  measurementId: "G-KEVRL2KEX5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const messaging = getMessaging(app);


console.log(messaging)

export const getTokenApp = (setTokenFound) => {

    return getToken(messaging, {vapidKey: 'BCCrcJGAh7yDy_T0beo5cFosw6JO6L5O5znx0jFst4ysjVZrXDjQS-PQPqT-GotV-exahKXAEQoKZw7jxJeZLdw'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }


export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});