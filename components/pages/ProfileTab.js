import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
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

// const some = useSelector(state => state.data.user)

export default function ProfileTab({ user }) {
  const { colors } = useTheme();
  const [userData, setUserData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (user) {
      setUserData(user.data);
    } else {
      docQuery('users', [['username', '==', 'EmmyPop']])
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
        <Text variant="headlineLarge">
          {isLoaded ? userData.username : null}
        </Text>
      </View>
      {isLoaded ? <StatList stats={userData.stats} /> : null}
    </ScrollView>
  );
}
