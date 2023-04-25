import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
/* eslint-disable import/no-extraneous-dependencies */
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  collection,
  query,
  where,
} from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'AIzaSyDgjwdqNEegA9WfXndsYZZw0peX6M5_mw0',
  authDomain: 'clarinet-93e57.firebaseapp.com',
  projectId: 'clarinet-93e57',
  storageBucket: 'clarinet-93e57.appspot.com',
  messagingSenderId: '208590470907',
  appId: '1:208590470907:web:dc2844679e1a12e19efa5e',
  measurementId: 'G-BTQS94M564',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const exData = {
  id: 'test1',
  name: {
    first: 'Andrew',
    last: 'Ihn',
  },
  username: 'andrewihn',
  interests: ['swimming', 'soccer', 'volleyball'],
  profilePhoto: '',
  settings: {},
  friends: ['Swolebraham Lincoln', 'spongebob'],
  communities: ['Roller Demons'],
  fitnessStats: {
    swimming: {
      '100meter': '2 minutes',
    },
  },
  DMs: [{}],
};

// export
// async function addProfile() {
//   const docRef = await setDoc(doc(db, 'users', exData.id), exData);
//   console.log('Document written with ID: ', docRef.id);
// }
// addProfile();

// export

// getProfile('test1');

export default function ProfileSettings({profile}) {
  const { colors } = useTheme();
  const [userData, setUserData] = useState([]);

  // async function getProfile(username) {
  //  const userInfo = await getDocs(query(collection(db, 'users'), where('username', '==', user)));
  //   const docRef = query(collection(db, 'users'), where('username', '==', username));
  //   const userInfo = await getDocs(docRef);
  //   userInfo.forEach((d) => {
  //     setUserData((prev) => [...prev, d.data()]);
  //   });
  //   // return userInfo;
  // }

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <Text>Adjust your profile settings here.</Text>
      <Text>{userData}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});