import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';
import 'firebase/database';
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: 'AIzaSyDWZi4Fjyc5SR0g_sHWXYEUWiFcaEZPSdI',
    authDomain: 'research-a941d.firebaseapp.com',
    databaseURL: 'https://research-a941d-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'research-a941d',
    storageBucket: 'research-a941d.appspot.com',
    messagingSenderId: '757422426761',
    appId: '1:757422426761:web:2ae5f36071fd474166d458',
    measurementId: 'G-FVCK6TQZ2R'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get a reference to the database service
var database = firebase.database();
database.ref('data/' + 3).set({
    username: 'name',
    email: 'email',
    profile_picture: 'imageUrl'
});

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
