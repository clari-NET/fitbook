import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
// import getProfile from '../firebaseFiles/API';
import db from '../../firebase/firebase.config';

/* eslint-disable import/no-extraneous-dependencies */

import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from 'firebase/firestore';
import firebaseConfig from '../../firebaseFiles/keys';

export default function Profile() {
  const { colors } = useTheme();
  const [userData, setUserData] = useState([]);
  // const details = [];

  async function getProfile(username) {
    const docRef = query(collection(db, 'users'), where('username', '==', username));
    const userInfo = await getDocs(docRef);
    userInfo.forEach((d) => {
      setUserData({ ...d.data(), id: d.id });
    });
  }

  useEffect(() => {
    getProfile('test1');
  });

  // useEffect(() => {
  //   getProfile('test1')
  //     .then((data) => {
  //       setUserData(data);
  //     })
  //     .catch((e) => console.error('error getting data', e));
  // }, []);

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <Text>Hello from Profile page! This is where you'll see your profile or that of another user, depending on how you got here. we love props!</Text>
      <Text>
        UserData:
        {' '}
        {userData ? userData.username : null}
      </Text>
      <Text>
        Friends:
        {' '}
        {userData.friends ? userData.friends[0] : null}
        {userData.friends ? userData.friends[1] : null}
        {userData.friends ? userData.friends[2] : null}
      </Text>
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
