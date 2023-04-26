import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import Community from './Community';
import Settings from './ProfileSettings';

const Stack = createNativeStackNavigator();

export default function ProfileMain() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
    >
      <Stack.Screen name="Profile" component={Profile} />
      {/* <Stack.Screen name="Community" component={Community} /> */}
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
