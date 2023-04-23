import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home';
import Profile from './Profile';
import Community from './Community';
import DMList from './DMList';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

// const Tab = createBottomTabNavigator();

export default function Main({ navigation }) {
  return (
    <>
    <View style={styles.container}>
      <Text>Welcome to the main app</Text>
      <Button
        title="Logout"
        onPress={() => {navigation.navigate('Login')}}
      />
      <StatusBar style="auto" />
    </View>
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
            <Icon name='home' color={color} size={20} />
          )}}
        />
        <Tab.Screen
          name='Profile'
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
            <Icon name='bell' color={color} size={20} />
          )}}
        />
        <Tab.Screen
          name='Community'
          component={Community}
          options={{
            tabBarLabel: 'Communities',
            tabBarIcon: ({ color }) => (
            <Icon name='account-group' color={color} size={20} />
          )}}
        />
        <Tab.Screen
          name='Messages'
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
