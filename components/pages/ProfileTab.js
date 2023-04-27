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
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import * as SecureStore from 'expo-secure-store';
import db from '../../firebaseFiles/firebase.config';
import StatList from '../lists/StatList';
// import ProfileSettings from './ProfileSettings';

// const Stack = createNativeStackNavigator();

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

export default function ProfileTab({ navigation, user }) {
  const { colors } = useTheme();
  const [userData, setUserData] = useState(sampleData);
  const [isLoaded, setIsLoaded] = useState(true);

  async function getUser() {
    const auth = getAuth();
    // console.log(auth.currentUser)
    const userRef = doc(db, 'users', auth.currentUser.uid);
    return userRef;
  }
  // const [username, setUsername] = useState('');

  // async function getUser(key) {
  //   if (!user) {
  //     const result = await SecureStore.getItemAsync(key);
  //     if (result) {
  //       return result;
  //     }
  //     return sampleData;
  //   }
  //   return user;
  // }

  // async function getProfile(username) {
  //   const docRef = query(collection(db, 'tests'), where('username', '==', username));
  //   const result = [];

  //   const userInfo = await getDocs(docRef);
  //   // console.log(userInfo);
  //   userInfo.forEach((d) => {
  //     result.push({ ...d.data(), id: d.id });
  //     // console.log(d.id);
  //   });
  //   setUserData(result);
  // }

  // useEffect(() => {
  //   const current = getUser();
  //   console.log(current);
  //   // getProfile('testOne');
  //   // console.log(userData);
  //   // // console.log(userData[0].fitnessStats[0].stat1);
  //   // if (userData.length > 0) {
  //   //   setIsLoaded(true);
  //   // } else {
  //   //   setIsLoaded(false);
  //   // }
  // }, []);

  return (
    <ScrollView>
      <View style={[styles.header]}>
        <Avatar.Image size={150} source={require('../../assets/SwolebrahamLincoln.png')} />
        <IconButton icon="cog" size={40} iconColor={colors.primary} onPress={() => navigation.navigate('ProfileSettings')} />
      </View>
      <View style={[styles.body]}>
        <Text variant="headlineLarge">
          {userData ? userData[0].username : null}
        </Text>
      </View>
      {userData ? <StatList stats={userData[0].fitnessStats} /> : null}
    </ScrollView>
  );
}
