import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  getDocs,
  collection,
  query,
  or,
  orderBy,
  where,
} from 'firebase/firestore';
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from '@env';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

// import firebaseConfig from './keys';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

export async function docQuery(collectionName, conditions = [], sortBy = null) {
  const whereClauses = conditions.map((condition) => where(...condition));
  let q;
  if (sortBy) {
    q = query(collection(db, collectionName), ...whereClauses, orderBy(sortBy));
  } else {
    q = query(collection(db, collectionName), ...whereClauses);
  }
  const resultDocs = await getDocs(q);
  const results = resultDocs.docs.map((doc) => doc.data());
  return results;
}

export async function docOrQuery(collectionName, conditions = [], sortBy = null) {
  const whereClauses = conditions.map((condition) => where(...condition));
  let q;
  if (sortBy) {
    q = query(collection(db, collectionName), or(...whereClauses), orderBy(sortBy));
  } else {
    q = query(collection(db, collectionName), or(...whereClauses));
  }
  // const q = query(collection(db, collectionName), or(...whereClauses));
  const resultDocs = await getDocs(q);
  const results = resultDocs.docs.map((doc) => doc.data());
  return results;
}
