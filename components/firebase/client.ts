import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase-admin/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD7j_hCD9XNzrsE0gCVrUNf9Iyq4COxAK4',
  authDomain: 'interviewprep-d79c9.firebaseapp.com',
  projectId: 'interviewprep-d79c9',
  storageBucket: 'interviewprep-d79c9.firebasestorage.app',
  messagingSenderId: '494750171350',
  appId: '1:494750171350:web:37b3b61baea4729b9c8977',
  measurementId: 'G-87L3MJ6YB9',
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
