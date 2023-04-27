import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import {
  useTheme, Text,
} from 'react-native-paper';
import Friends from './Friends';
import ProfileCommunity from './ProfileCommunity';
import Feed from './Feed';
import ProfileSub from './ProfileSub';
import ProfileSettings from './ProfileSettings';

export default function Profile({ navigation }) {
  const { colors } = useTheme();
  const [profileSubPage, setProfileSubPage] = useState('Activity');
  console.log('Profile', navigation)

  // useEffect(() => {
  //   // fetch data for
  //   // Events
  //   // Friends
  //   // Community
  //   // Profile
  //   // fetchData(profileSubpage)
  //   // console.log(`${profileSubPage} was loaded`);
  // }, [profileSubPage]);

  function SubPage({ page }) {
    return {
      Activity: <Feed />,
      Friends: <Friends />,
      ProfileCommunity: <ProfileCommunity />,
      ProfileSub: <ProfileSub setProfileSubPage={setProfileSubPage} />,
      ProfileSettings: <ProfileSettings />,
    }[page];
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button title="Activity" onPress={() => setProfileSubPage('Activity')} />
        <Button title="Friends" onPress={() => setProfileSubPage('Friends')} />
        <Button title="Communities" onPress={() => setProfileSubPage('ProfileCommunity')} />
        <Button title="Profile" onPress={() => setProfileSubPage('ProfileSub')} />
      </View>
      <SubPage page={profileSubPage} />
    </View>
  );
}
