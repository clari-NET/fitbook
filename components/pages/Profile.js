import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useTheme, SegmentedButtons, ActivityIndicator } from 'react-native-paper';
import { getDoc, doc } from 'firebase/firestore';
import db, { docQuery } from '../../firebaseFiles/firebase.config';
import Friends from './Friends';
import ProfileCommunity from './ProfileCommunity';
import Feed from './Feed';
import ProfileTab from './ProfileTab';
import ProfileSettings from './ProfileSettings';

export default function Profile({ navigation, route }) {
  const [profileSubPage, setProfileSubPage] = useState('ProfileTab');
  const [events, setEvents] = useState([]);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const { colors } = useTheme();

  function getPostsAndEvents(curUser) {
    const postQueryConditions = [['user.user_id', '==', curUser.id]];
    const eventQueryConditions = [
      [
        'members',
        'array-contains',
        { user_id: curUser.id, username: curUser.username },
      ],
    ];
    return Promise.all([
      docQuery('posts', postQueryConditions, 'date'),
      docQuery('events', eventQueryConditions, 'date_time.date'),
    ]);
  }

  function refresh() {
    setRefreshTrigger(!refreshTrigger);
  }

  useEffect(() => {
    getDoc(doc(db, 'users', route.params.userId))
      .then((u) => {
        const data = u.data();
        return data;
      })
      .then((data) => {
        setUser(data);
        return getPostsAndEvents(data);
      })
      .then(([postsData, eventsData]) => {
        setPosts(postsData);
        setEvents(eventsData);
        setIsLoading(false);
      })
      .catch(console.error);
  }, [route.params.userId, refreshTrigger]);

  function SubPage({ page, thisPost, thisEvent, thisUser }) {
    return {
      Activity: <Feed posts={thisPost} events={thisEvent} />,
      Friends: <Friends navigation={navigation} user={thisUser} />,
      ProfileCommunity: (
        <ProfileCommunity navigation={navigation} user={thisUser} />
      ),
      ProfileTab: <ProfileTab navigation={navigation} user={thisUser} refresh={refresh} />,
      ProfileSettings: (
        <ProfileSettings navigation={navigation} user={thisUser} />
      ),
    }[page];
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating color={colors.primary} />
      </View>
    );
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
      <SubPage
        page={profileSubPage}
        thisPost={posts}
        thisEvent={events}
        // thisNavigation={navigation}
        thisUser={user}
      />
    </View>
  );
}
