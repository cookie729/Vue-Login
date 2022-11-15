import { createApp } from 'vue'
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1_gPF1HEllxEJhpVv4y0yDajBbPyXhvw",
  authDomain: "frontend-app-5f013.firebaseapp.com",
  projectId: "frontend-app-5f013",
  storageBucket: "frontend-app-5f013.appspot.com",
  messagingSenderId: "48230663441",
  appId: "1:48230663441:web:9def5a6cc836044ae278b0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).mount('#app')
