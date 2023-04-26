import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CommunityList from '../lists/CommunityList';
import Community from './Community';

const CommunityStack = createNativeStackNavigator();

export default function CommunityTab() {
  return (
    <CommunityStack.Navigator
      initialRouteName='CommunityList'
      screenOptions={{
        headerShown: false,
      }}
    >
      <CommunityStack.Screen name='CommunityList' component={CommunityList} />
      <CommunityStack.Screen name='Community' component={Community} />
    </CommunityStack.Navigator>
  );
}
