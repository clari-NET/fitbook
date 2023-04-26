import React, { useState, useEffect } from 'react';
import { View, IconButton } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileSub from './ProfileSub';
import ProfileSettings from './ProfileSettings';

const ProfileStack = createNativeStackNavigator();

export default function ProfileTab() {
  // const [profileSubPage, setProfileSubPage] = useState('ProfileSub');
  // const [isSettings, setIsSettings] = useState(false);

  // useEffect(() => {
  //   if (profileSubPage === 'ProfileSettings') {
  //     setIsSettings(true);
  //   }
  // }, [profileSubPage]);

  // function SubPage({ page }) {
  //   return {
  //     ProfileSub: <ProfileSub setProfileSubPage={setProfileSubPage} />,
  //     ProfileSettings: <ProfileSettings />,
  //   }[page];
  // }

  return (
    <ProfileStack.Navigator
      initialRouteName="ProfileSub"
    >
      <ProfileStack.Screen name="ProfileSub" component={ProfileSub} />
      <ProfileStack.Screen name="ProfileSettings" component={ProfileSettings} />
    </ProfileStack.Navigator>
    // <View>
    //   <SubPage page={profileSubPage} />
    // </View>
  );
}
