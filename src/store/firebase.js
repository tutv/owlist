import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase';

Vue.use(VueFire);

const config = {
    apiKey: "AIzaSyBZ74JGc3Aog3hSKdxxHdGNVZApSdPgfbw",
    authDomain: "owlist-a810e.firebaseapp.com",
    databaseURL: "https://owlist-a810e.firebaseio.com",
    projectId: "owlist-a810e",
    storageBucket: "owlist-a810e.appspot.com",
    messagingSenderId: "1000788664359"
};

const app = firebase.initializeApp(config);

export default app;