import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { SegmentedButtons, Text } from 'react-native-paper';
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
      docQuery('posts', postQueryConditions),
      docQuery('events', eventQueryConditions),
    ]);
  }
  // console.log(route.params.userId);

  function refresh() {
    console.log('refreshed!')
    setRefreshTrigger(!refreshTrigger);
  }

  useEffect(() => {
    // getDoc(doc(db, 'users', route.params.userId))
    getDoc(doc(db, 'users', '1'))
      .then((u) => {
        const data = u.data();
        // console.log(u)
        return data;
      })
      .then((data) => {
        // console.log('QQ',data)
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

  function SubPage({ page, thisPost, thisEvent, thisNavigation, thisUser, refresh }) {
    return {
      Activity: <Feed posts={thisPost} events={thisEvent} />,
      Friends: <Friends navigation={thisNavigation} user={thisUser} />,
      ProfileCommunity: (
        <ProfileCommunity navigation={thisNavigation} user={thisUser}/>
      ),
      ProfileTab: <ProfileTab navigation={thisNavigation} user={thisUser} refresh={refresh} />,
      ProfileSettings: (
        <ProfileSettings navigation={thisNavigation} user={thisUser} />
      ),
    }[page];
  }

  if (isLoading) {
    return <Text>Loading...</Text>
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
        thisNavigation={navigation}
        thisUser={user}
        refresh={refresh}
      />
    </View>
  );
}
