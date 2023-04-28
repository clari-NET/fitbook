import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';
import {
  useTheme, Avatar, Text, IconButton, Button, Surface,
} from 'react-native-paper';
import * as SecureStore from 'expo-secure-store';
import { docQuery } from '../../firebaseFiles/firebase.config';
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

export default function ProfileTab({ user }) {
  const { colors } = useTheme();
  const [userData, setUserData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  // console.log(user, auth.currentUser.uid);
  useEffect(() => {
    if (user) {
      setUserData(user);
    } else {
      docQuery('users', [['id', '==', auth.currentUser.uid]])
        .then((res) => {
          setUserData(res);
        });
    }
  }, []);

  return (
    !userData.name ? <Text>Loading...</Text> : (
      <ScrollView>
        <View style={[styles.header]}>
          <Avatar.Image size={150} source={{ uri: userData.profile_photo }} />
        </View>
        <View style={[styles.body]}>
          <Text variant="headlineMedium">{userData.username}</Text>
          <Text variant="headlineMedium">
            {`${userData.name.first} ${userData.name.last}`}
          </Text>
        </View>
        <StatList stats={userData.stats} />
      </ScrollView>
    )
  );
}
