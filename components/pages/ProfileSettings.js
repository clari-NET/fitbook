import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme, Text, Switch, Avatar } from 'react-native-paper';

export default function ProfileSettings({ profile }) {
  const { colors } = useTheme();
  const [isNotifyOn, setisNotifyOn] = useState(true);

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <View style={[styles.header]}>
        <Avatar.Image size={150} source={require('../../assets/SwolebrahamLincoln.png')} />
      </View>
      <View style={[styles.body]}>
        <Text variant="headlineLarge">Email Notifications:</Text>
        <Switch value={isNotifyOn} onValueChange={() => setisNotifyOn(!isNotifyOn)} />
      </View>
      <View style={[styles.body]}>
        <Text variant="headlineLarge">Light/Dark Mode:</Text>
        <Switch value={isNotifyOn} onValueChange={() => setisNotifyOn(!isNotifyOn)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // gap: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 120,
    marginTop: 50,
  },
  body: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
