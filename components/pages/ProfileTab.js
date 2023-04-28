import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
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
import { getAuth } from 'firebase/auth';
import * as SecureStore from 'expo-secure-store';
import db from '../../firebaseFiles/firebase.config';
import StatList from '../lists/StatList';
// import ProfileSettings from './ProfileSettings';

const auth = getAuth().currentUser;

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

const sampleData = {
  email: 'test@ai.com',
  name: {
    first: 'Test',
    last: 'Ai',
  },
  timeStamp: new Date(),
  username: 'Test AI',
  stats: [
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
};

// const some = useSelector(state => state.data.user)

export default function ProfileTab({ navigation, user }) {
  const { colors } = useTheme();
  const [userData, setUserData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // setDoc(doc(db, 'users', auth.currentUser.uid), sampleData);
    const userRef = doc(db, 'users', auth.uid);
    getDoc(userRef)
      .then((coll) => {
        setUserData({ ...coll.data(), id: coll.id });
      });

    console.log(userData);
    if (userData.username) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
    }
  }, []);

  return (
    <ScrollView>
      <View style={[styles.header]}>
        <Avatar.Image size={150} source={require('../../assets/SwolebrahamLincoln.png')} />
        <IconButton icon="cog" size={40} iconColor={colors.primary} onPress={() => navigation.navigate('ProfileSettings')} />
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
