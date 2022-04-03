import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmYZJ0Gt3N1rMwQsiD2YQpGhn1gi1TlS0",
  authDomain: "slicke-clone.firebaseapp.com",
  projectId: "slicke-clone",
  storageBucket: "slicke-clone.appspot.com",
  messagingSenderId: "562887071916",
  appId: "1:562887071916:web:7cf6d5b4edeb5a79832709",
  measurementId: "G-ZK8EKL2LEM",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
