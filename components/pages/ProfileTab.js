import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import {
  useTheme, Avatar, Text, IconButton, Button, Surface,
} from 'react-native-paper';

import {
  getDocs,
  collection,
  query,
  where,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import * as SecureStore from 'expo-secure-store';
import db, { docQuery } from '../../firebaseFiles/firebase.config';
import StatList from '../lists/StatList';
import { useSelector } from 'react-redux';
const auth = getAuth();
// const { currUser } = useSelector((state) => state.data.user);

export default function ProfileTab({ navigation: { goBack }, user, refresh }) {
  const { colors } = useTheme();
  const [userData, setUserData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [reload, setReload] = useState(false);

  const selfData = useSelector((state) => state.user.data);
  const userSelf = selfData.username === user.username;

  useEffect(() => {
    // if it's themselves
    if (userSelf) {
      setUserData(selfData);
      setIsLoaded(true);
    } else {
      setUserData(user);
      setIsLoaded(true);
    }
  }, [reload]);

  function addFriend(id) {
    const targetRef = doc(db, 'users', String(id));
    const myRef = doc(db, 'users', getAuth().currentUser.uid);
    Promise.all([updateDoc(myRef, { friends: arrayUnion(id) }),
      updateDoc(targetRef, { friends: arrayUnion(selfData.id) })])
      .then(() => 'Success')
      .then(() => refresh())
      .catch((err) => console.log(err));
  }

  function unfriend(id) {
    const targetRef = doc(db, 'users', String(id));
    const myRef = doc(db, 'users', getAuth().currentUser.uid);
    Promise.all([updateDoc(myRef, { friends: arrayRemove(id) }),
      updateDoc(targetRef, { friends: arrayRemove(selfData.id) })])
      .then(() => 'Success')
      .then(() => refresh())
      .catch((err) => console.log(err));
  }

  return (
    !userData.name ? <Text>Loading...</Text> : (
      <ScrollView>
        <View style={[styles.header]}>
          <Avatar.Image size={150} source={{ uri: userData.profile_photo }} />
        </View>
        <View style={[styles.body]}>
          <Text variant="headlineMedium">{userData.username}</Text>
          {!userSelf && (userData.friends.includes(selfData.id)
            ? <IconButton icon="account-minus" size={40} iconColor={colors.primary} onPress={() => unfriend(userData.id)} />
            : <IconButton icon="account-plus" size={40} iconColor={colors.primary} onPress={() => addFriend(userData.id)} />)
          }
        </View>
        <View style={[styles.username]}>
          <Text variant="headlineMedium">
            {`${userData.name.first} ${userData.name.last}`}
          </Text>
        </View>
        <StatList stats={userData.stats} />
      </ScrollView>
    )
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 120,
    margin: 20,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 120,
  },
  username: {
    alignItems: 'center',
  },
});
