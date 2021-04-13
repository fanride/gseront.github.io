importScripts("https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.15.5/firebase-messaging.js");

//Using singleton breaks instantiating messaging()
// App firebase = FirebaseWeb.instance.app;


firebase.initializeApp({
     apiKey: "AIzaSyDsyWW3d9ODzbZsjlxPX6cn7WuenN0m0JU",
     authDomain: "fanride-mvp-db.firebaseapp.com",
     databaseURL: "https://fanride-mvp-db.firebaseio.com",
     projectId: "fanride-mvp-db",
     storageBucket: "fanride-mvp-db.appspot.com",
     messagingSenderId: "727935608195",
     appId: "1:727935608195:web:cc98b911dbdddc06b502b6"
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("New Message");
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});