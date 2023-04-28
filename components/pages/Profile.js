import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import {
  useTheme, Text, SegmentedButtons,
} from 'react-native-paper';
import { useSelector } from 'react-redux';
import { docQuery } from '../../firebaseFiles/firebase.config';
import Friends from './Friends';
import ProfileCommunity from './ProfileCommunity';
import Feed from './Feed';
import ProfileTab from './ProfileTab';
import ProfileSettings from './ProfileSettings';

export default function Profile({ navigation, route }) {
  const { colors } = useTheme();
  const [profileSubPage, setProfileSubPage] = useState('ProfileTab');
  const user = useSelector((state) => state.user);

  function SubPage({ page }) {
    return {
      Activity: <Feed />,
      Friends: <Friends navigation={navigation} />,
      ProfileCommunity: <ProfileCommunity />,
      ProfileTab: <ProfileTab navigation={navigation} />,
      ProfileSettings: <ProfileSettings user={user} />,
    }[page];
  }

  return (
    <View style={{ flex: 1 }}>
      <SegmentedButtons
        value={profileSubPage}
        onValueChange={setProfileSubPage}
        buttons={[
          {
            label: 'Activity',
            value: 'Activity',
          },
          {
            label: 'Friends',
            value: 'Friends',
          },
          {
            label: 'Communities',
            value: 'ProfileCommunity',
          },
          {
            label: 'Profile',
            value: 'ProfileTab',
          },
        ]}
      />
      <SubPage page={profileSubPage} />
    </View>
  );
}
