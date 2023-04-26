import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './Home';
import Profile from './Profile';
import CommunityList from '../lists/CommunityList';
import DMList from './DMList';
import AppHeader from '../utility/AppHeader';
import Friends from './Friends';
import { userStatus } from '../../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import {getAuth } from 'firebase/auth';
import * as SecureStore from 'expo-secure-store';

const Tab = createMaterialBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function ColoredIcon(name, color) {
  return <Icon name={name} color={color} size={20} />;
}

export default function Main({ navigation }) {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const auth = getAuth();

  async function deleteStore(key) {
    await SecureStore.deleteItemAsync(key);
  }

  return (
    <>
      <AppHeader />
      <View style={[styles.container, { backgroundColor: colors.surface }]}>
        <Text>Welcome to the main app</Text>
        <Button
          title="Logout"
          onPress={async() => {
            auth.signOut();
            await deleteStore('FitbookEmail');
            await deleteStore('FitbookPassword');
            dispatch(userStatus(false));
          }}
        />
        <StatusBar />
      </View>
      <Tab.Navigator>
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
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => ColoredIcon('bell', color),
          }}
        />
        <Tab.Screen
          name='Community'
          component={CommunityList}
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
    </>
  );
}
