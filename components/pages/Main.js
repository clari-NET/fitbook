import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome5 } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';

import db from '../../firebaseFiles/firebase.config';
import Home from './Home';
import Profile from './Profile';
import ProfileSettings from './ProfileSettings';
import CommunityTab from './CommunityTab';
import DMList from './DMList';
import AppHeader from '../utility/AppHeader';
import { updateUser } from '../../redux/user/userSlice';
import Comment from './Comment';
import Community from './Community';
import Conversation from './Conversation';
import Loading from '../cards/Loading';

const Tab = createMaterialBottomTabNavigator();

function ColoredIcon(name, color, isFA = false) {
  if (isFA) {
    return <FontAwesome5 name={name} color={color} size={20} />;
  }
  return <Icon name={name} color={color} size={24} />;
}

function TabNavigator() {
  return (
    <Tab.Navigator
      options={{
        headerBackVisible: false,
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => ColoredIcon('home', color),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        initialParams={{ userId: getAuth().currentUser.uid }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Profile', { userId: getAuth().currentUser.uid });
          },
        })}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => ColoredIcon('user-alt', color, true),
        }}
      />
      <Tab.Screen
        name='CommunityTab'
        component={CommunityTab}
        options={{
          tabBarLabel: 'Communities',
          tabBarIcon: ({ color }) => ColoredIcon('account-group', color),
        }}
      />
      <Tab.Screen
        name='Messages'
        component={DMList}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color }) => ColoredIcon('chat', color),
        }}
      />
    </Tab.Navigator>
  );
}

const TabStack = createNativeStackNavigator();

export default function Main({ navigation }) {
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = useSelector((state) => state.user).data;

  useEffect(() => {
    getDoc(doc(db, 'users', auth.currentUser.uid))
      .then((u) => {
        const data = u.data();
        data.timestamp = JSON.stringify(data.timestamp);
        return data;
      })
      .then((uData) => dispatch(updateUser(uData)))
      .catch(console.error);
  }, []);

  if (!user) {
    return <Loading />;
  }

  return (
    <>
      <AppHeader navigation={navigation} />
      <StatusBar />
      <TabStack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <TabStack.Screen name='TabNavigator' component={TabNavigator} />
        <TabStack.Screen name='Comment' component={Comment} />
        <TabStack.Screen name='Community' component={Community} />
        <TabStack.Screen name='ProfileSettings' component={ProfileSettings} />
        <TabStack.Screen name='Conversation' component={Conversation} />
      </TabStack.Navigator>
    </>
  );
}
