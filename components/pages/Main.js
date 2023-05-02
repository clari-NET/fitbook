import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useTheme, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';

import db from '../../firebaseFiles/firebase.config';
import Home from './Home';
import Profile from './Profile';
import ProfileTab from './ProfileTab';
import ProfileSettings from './ProfileSettings';
import CommunityTab from './CommunityTab';
import DMList from './DMList';
import AppHeader from '../utility/AppHeader';
import { updateUser } from '../../redux/user/userSlice';
import Comment from './Comment';
import Community from './Community';
import Activity from './Feed';
import Friends from './Friends';
import Conversation from './Conversation';
import Loading from '../cards/Loading';

const Tab = createMaterialBottomTabNavigator();

function ColoredIcon(name, color) {
  return <Icon name={name} color={color} size={20} />;
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
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        initialParams={{ userId: getAuth().currentUser.uid }}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => ColoredIcon('bell', color),
        }}
      />
      <Tab.Screen
        name='CommunityTab'
        component={CommunityTab}
        options={{
          tabBarLabel: 'Communities',
          tabBarIcon: ({ color }) => ColoredIcon('account-group', color),
          headerShown: false,
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
  const { colors } = useTheme();
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
      {/* <View style={[styles.container, { backgroundColor: colors.surface }]}> */}
      <StatusBar />
      <TabStack.Navigator>
        <TabStack.Screen
          name='TabNavigator'
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <TabStack.Screen
          name='Comment'
          component={Comment}
          options={{ headerBackVisible: false }}
        />
        <TabStack.Screen
          name='Activity'
          component={Activity}
          options={{ headerBackVisible: false }}
        />
        <TabStack.Screen
          name='Friends'
          component={Friends}
          options={{ headerBackVisible: false }}
        />
        <TabStack.Screen
          name='Community'
          component={Community}
          options={{ headerBackVisible: false }}
        />
        <TabStack.Screen
          name='ProfileTab'
          component={ProfileTab}
          options={{ headerBackVisible: false }}
        />
        <TabStack.Screen
          name='ProfileSettings'
          component={ProfileSettings}
          options={{ headerBackVisible: false }}
        />
        <TabStack.Screen
          name='Conversation'
          component={Conversation}
          options={{ headerBackVisible: false }}
        />
      </TabStack.Navigator>
    </>
  );
}
