import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import * as SecureStore from 'expo-secure-store';

import Home from './Home';
import Profile from './Profile';
import CommunityTab from './CommunityTab';
import DMList from './DMList';
import AppHeader from '../utility/AppHeader';
import { userStatus } from '../../redux/user/userSlice';
import Comment from './Comment';

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

function TabNavigator() {
  return (
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
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const auth = getAuth();

  async function deleteStore(key) {
    await SecureStore.deleteItemAsync(key);
  }

  return (
    <>
      <AppHeader
        onLogout={async () => {
          auth.signOut();
          await deleteStore('FitbookEmail');
          await deleteStore('FitbookPassword');
          dispatch(userStatus(false));
        }}
      />
      {/* <View style={[styles.container, { backgroundColor: colors.surface }]}> */}
      <StatusBar />
      {/* </View> */}
      <TabStack.Navigator>
        <TabStack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <TabStack.Screen name="Comment" component={Comment} />
      </TabStack.Navigator>
    </>
  );
}
