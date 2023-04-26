import React, { useState, useEffect } from 'react';
import {
  View, Text, Button,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import Friends from './Friends';
import Feed from './Feed';

export default function Profile() {
  const { colors } = useTheme();
  const [profileSubPage, setProfileSubPage] = useState('Activity');

  useEffect(() => {
    // fetch data for
    // Events
    // Friends
    // Community
    // Profile
    // fetchData(profileSubpage)
    // console.log(`${profileSubPage} was loaded`);
  }, [profileSubPage]);

  function SubPage({ page }) {
    return {
      Activity: <Feed />,
      Friends: <Friends />,
      Communities: <Text>Communities sub-page</Text>,
      Profile: <Text>Profile sub-page</Text>,
    }[page];
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.surface }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button title='Activity' onPress={() => setProfileSubPage('Activity')} />
        <Button title="Friends" onPress={() => setProfileSubPage('Friends')} />
        <Button title="Communities" onPress={() => setProfileSubPage('Communities')} />
        <Button title="Profile" onPress={() => setProfileSubPage('Profile')} />
      </View>
      <SubPage page={profileSubPage} />
    </View>
  );
}
