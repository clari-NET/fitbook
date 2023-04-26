import React, { useState, useEffect } from 'react';
import { View, IconButton } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileSub from './ProfileSub';
import ProfileSettings from './ProfileSettings';

const ProfileStack = createNativeStackNavigator();

export default function ProfileTab() {
  console.log('Hello');
  return (
    <ProfileStack.Navigator
      initialRouteName="ProfileSub"
    >
      <ProfileStack.Screen name="ProfileSub" component={ProfileSub} />
      <ProfileStack.Screen name="ProfileSettings" component={ProfileSettings} />
    </ProfileStack.Navigator>
  );
}
