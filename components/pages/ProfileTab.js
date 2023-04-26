import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileSub from './ProfileSub';
import ProfileSettings from './ProfileSettings';

const ProfileStack = createNativeStackNavigator();

export default function ProfileTab() {
  return (
    <ProfileStack.Navigator
      initialRouteName='ProfileSub'
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name='ProfileSub' component={ProfileSub} />
      <ProfileStack.Screen name='ProfileSettings' component={ProfileSettings} />
    </ProfileStack.Navigator>
  );
}
