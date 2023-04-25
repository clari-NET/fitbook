import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './Home';
import Profile from './Profile';
import Community from './Community';
import DMList from './DMList';
import AppHeader from '../utility/AppHeader';

const Tab = createMaterialBottomTabNavigator();

// const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Main({ navigation }) {
  const { colors } = useTheme();

  return (
    <>
      <AppHeader />
      <View style={[styles.container, { backgroundColor: colors.surface }]}>
        <Text>Welcome to the main app</Text>
        <Button
          title="Logout"
          onPress={() => { navigation.navigate('Login'); }}
        />
        <StatusBar style="auto" />
      </View>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Icon name='home' color={color} size={20} />
          )}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
            <Icon name='bell' color={color} size={20} />
          )}}
        />
        <Tab.Screen
          name="Community"
          component={Community}
          options={{
            tabBarLabel: 'Communities',
            tabBarIcon: ({ color }) => (
            <Icon name='account-group' color={color} size={20} />
          )}}
        />
        <Tab.Screen
          name="Messages"
          component={DMList}
          options={{
            tabBarLabel: 'Messages',
            tabBarIcon: ({ color }) => (
            <Icon name='chat' color={color} size={20} />
          )}}
        />
      </Tab.Navigator>
    </>
  );
}
