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
} from 'firebase/firestore';
import db from '../../firebaseFiles/firebase.config';
import StatList from '../lists/StatList';
// import ProfileSettings from './ProfileSettings';

// const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 120,
  },
  body: {
    alignItems: 'center',
  },
});

const sampleData = [{
  username: 'testOne',
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

export default function ProfileSub({ navigation }) {
  const [userData, setUserData] = useState(sampleData);
  const [isLoaded, setIsLoaded] = useState(true);
  const [value, setValue] = useState('');

  async function getProfile(username) {
    const docRef = query(collection(db, 'tests'), where('username', '==', username));
    const result = [];

    const userInfo = await getDocs(docRef);
    // console.log(userInfo);
    userInfo.forEach((d) => {
      result.push({ ...d.data(), id: d.id });
      // console.log(d.id);
    });
    setUserData(result);
  }

  // useEffect(() => {
  //   getProfile('testOne');
  //   console.log(userData);
  //   // console.log(userData[0].fitnessStats[0].stat1);
  //   if (userData.length > 0) {
  //     setIsLoaded(true);
  //   } else {
  //     setIsLoaded(false);
  //   }
  // }, []);
  return (
    <ScrollView>
      <View style={[styles.header]}>
        <Avatar.Image size={150} source={require('../../assets/SwolebrahamLincoln.png')} />
        <IconButton icon="cog" size={50} onPress={() => navigation.navigate('Settings')} />
      </View>
      <View style={[styles.body]}>
        <Text variant="headlineLarge">
          Welcome
          {' '}
          {isLoaded ? userData[0].username : null}
          !
        </Text>
      </View>
      {isLoaded ? <StatList stats={userData[0].fitnessStats} /> : null}
    </ScrollView>
  );
}
