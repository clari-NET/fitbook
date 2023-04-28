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

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 120,
    marginTop: 20,
  },
  body: {
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 120,
  },
});

const sampleData = [{
  username: 'Swolebraham Lincoln',
  fitnessStats: [
    {
      category: 'Swimming',
      field: '100 meters',
      record: '2 minutes',
    },
    {
      category: 'Bench Press',
      field: 'Max weight',
      record: '150 lbs',
    },
    {
      category: 'Cycling',
      field: '3 miles',
      record: '16 minutes',

    },
    {
      category: 'Basketball',
      field: 'Most 3-pointers',
      record: '4',
    },
    {
      category: 'Volleyball',
      field: 'Most jump serves',
      record: '8',
    },
    {
      category: 'Soccer',
      field: 'Most goals (per game)',
      record: '2',

    },
    {
      category: 'Golf',
      field: '18 holes',
      record: '84',
    },
  ],
}];

export default function ProfileTab({ navigation, user, refresh }) {
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

  if (isLoaded === false) {
    return <Text>Loading...</Text>;
  }

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
    <ScrollView>
      <View style={[styles.header]}>
        <Avatar.Image size={150} source={{ uri: userData.profile_photo }} />
        {userSelf && <IconButton icon="cog" size={40} iconColor={colors.primary} onPress={() => navigation.navigate('ProfileSettings')} />}
      </View>
      <View style={[styles.body]}>
        <Text variant="headlineLarge">
          {userData ? userData.username : null}
          {!userSelf && (userData.friends.includes(selfData.id)
            ? <IconButton icon="account-minus" size={40} iconColor={colors.primary} onPress={() => unfriend(userData.id)} />
            : <IconButton icon="account-plus" size={40} iconColor={colors.primary} onPress={() => addFriend(userData.id)} />)
          }
        </Text>
      </View>
      {userData && <StatList stats={userData.stats} />}
    </ScrollView>
  );
}
