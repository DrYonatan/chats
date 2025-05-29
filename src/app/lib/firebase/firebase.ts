import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, get, onValue, set } from "firebase/database";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_API_KE,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence).catch((err) => {
  console.error("Failed to set auth persistence:", err);
});

export { database, ref, onValue, get, set };
