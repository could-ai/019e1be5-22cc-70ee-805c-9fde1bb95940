import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCki5q_ndrSWdWwtOmsYitPmwDmzP4NiD8",
  authDomain: "smart-library-2026-420ca.firebaseapp.com",
  projectId: "smart-library-2026-420ca",
  storageBucket: "smart-library-2026-420ca.firebasestorage.app",
  messagingSenderId: "736338888622",
  appId: "1:736338888622:web:92f797ebdfd742e04fea3f",
  measurementId: "G-TNLF7Q63RL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
