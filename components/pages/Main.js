import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home';
import Profile from './Profile';
import Community from './Community';
import DMList from './DMList';

const Tab = createBottomTabNavigator();

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the main app</Text>
      <Button
        title="Logout"
        onPress={() => {navigation.navigate('Login')}}
      />
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
           safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
               navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }

              return null;
            }}
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.title;

              return label;
            }}
          />
        )}
      >
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
            <Icon name='home' color={color} size={20} />
          )}}
        />
        <Tab.Screen
          name='Community'
          component={Community}
          options={{
            tabBarLabel: 'Communities',
            tabBarIcon: ({ color }) => (
            <Icon name='home' color={color} size={20} />
          )}}
        />
        <Tab.Screen
          name='Messages'
          component={DMList}
          options={{
            tabBarLabel: 'Messages',
            tabBarIcon: ({ color }) => (
            <Icon name='home' color={color} size={20} />
          )}}
        />
      </Tab.Navigator>
    </View>
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
