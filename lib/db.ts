import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, limit, query, where } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getUserData = (name: string) => {
  return getDocs(query(collection(db, 'user'), where('name', '==', name), limit(1)))
    .then((users) => {
      if (users.docs.length === 0) {
        return null;
      }
      return users.docs[0].data();
    });
};
