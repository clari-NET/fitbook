import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import apiKey from './keys';

// Initialize Firebase
const app = initializeApp(apiKey);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
export default db;
