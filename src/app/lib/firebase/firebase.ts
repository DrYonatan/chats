import { initializeApp } from "firebase/app";
import 'firebase/database';
import { getDatabase, ref, get, onValue, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDLwqKclcNnH4zt87A_jlKVM_yJUbgBl2Qpc",
  authDomain: "chats-55a5f.firebaseapp.com",
  databaseURL: "https://chats-55a5f-default-rtdb.firebaseio.com",
  projectId: "chats-55a5f",
  storageBucket: "chats-55a5f.firebasestorage.app",
  messagingSenderId: "514295668880",
  appId: "1:514295668880:web:fd7d9ad7f5a1e842b7b815",
  measurementId: "G-C4JY6H1WY2",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database, ref, onValue, get, set};