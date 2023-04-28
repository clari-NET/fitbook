import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';
import {
  useTheme, Avatar, Text, IconButton, Button, Surface,
} from 'react-native-paper';
import {
  getDoc,
  getDocs,
  setDoc,
  collection,
  query,
  where,
  doc,
} from 'firebase/firestore';
import * as SecureStore from 'expo-secure-store';
import db, { docQuery } from '../../firebaseFiles/firebase.config';
import StatList from '../lists/StatList';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 120,
    marginTop: 20,
  },
  body: {
    alignItems: 'center',
  },
});

// const { currUser } = useSelector((state) => state.data.user);
const auth = getAuth();

export default function ProfileTab({ currProfile }) {
  const { colors } = useTheme();
  const [userData, setUserData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (currProfile) {
      setUserData(currProfile.data);
    } else {
      docQuery('users', [['id', '==', auth.currentUser.uid]])
        .then((res) => {
          setUserData(res[0]);
        });
    }
    setIsLoaded(true);
  }, []);

  if (isLoaded === false) {
    return <Text>Loading...</Text>;
  }
  return (
    <ScrollView>
      <View style={[styles.header]}>
        <Avatar.Image size={150} source={{ uri: userData.profile_photo }} />
      </View>
      <View style={[styles.body]}>
        <Text variant="headlineMedium">
          {isLoaded ? userData.username : null}
        </Text>
        <Text variant="headlineMedium">
          {isLoaded ? `${userData.name.first} ${userData.name.last}` : null}
        </Text>
      </View>
      {isLoaded ? <StatList stats={userData.stats} /> : null}
    </ScrollView>
  );
}
