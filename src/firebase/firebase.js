import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCQrRURPqrvP9hsM1d9BjRoXJNALET_jNw",
    authDomain: "expensify-ea737.firebaseapp.com",
    databaseURL: "https://expensify-ea737.firebaseio.com",
    projectId: "expensify-ea737",
    storageBucket: "expensify-ea737.appspot.com",
    messagingSenderId: "57426780438"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
