importScripts("https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.17.1/firebase-auth-compat.js")


const firebaseConfig = {
    apiKey: "AIzaSyDpde8lqdlB_ibIXSfewgE7RivuKkGjZhE",
    authDomain: "reacttest1-985b5.firebaseapp.com",
    projectId: "reacttest1-985b5",
    storageBucket: "reacttest1-985b5.appspot.com",
    messagingSenderId: "814756112200",
    appId: "1:814756112200:web:981f7dff59c6b6c359f57d",
    measurementId: "G-KEVRL2KEX5"
  };''

const app =firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload =>{
    console.log("you received a message when you haven't the app active");
    console.log(payload)

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/logo192.png"
    }

    //added for auth for writing to database that message was delivered
  /*  const singUpAnonymously= ()=>{
        firebase.auth(app).signInAnonymously().then(user=> console.log("us"+firebase.auth().currentUser.uid));
      }
singUpAnonymously();*/

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    )
})



