import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import Friends from './Friends';

export default function Profile() {
  const { colors } = useTheme();
  const [profileSubPage, setProfileSubPage] = useState('Event');

  useEffect(() => {
    // fetch data for
    // Events
    // Friends
    // Community
    // Profile
    // fetchData(profileSubpage)
    console.log(`${profileSubPage} was loaded`);
  }, [profileSubPage]);

  function SubPage({ page }) {
    return {
      Event: <Text>Event sub-page</Text>,
      Friends: <Friends />,
      Community: <Text>Community sub-page</Text>,
      Profile: <Text>Profile sub-page</Text>,
    }[page];
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <View>
        <Button title='Event' onPress={() => setProfileSubPage('Event')} />
        <Button title="Friends" onPress={() => setProfileSubPage('Friends')} />
        <Button title="Community" onPress={() => setProfileSubPage('Community')} />
        <Button title="Profile" onPress={() => setProfileSubPage('Profile')} />
      </View>
      <SubPage page={profileSubPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
