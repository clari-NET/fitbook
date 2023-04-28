import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
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
      })
      .catch(console.error);
  }, [route.params.userId]);

  function SubPage({ page, thisPost, thisEvent, thisNavigation, thisUser }) {
    return {
      Activity: <Feed posts={thisPost} events={thisEvent} />,
      Friends: <Friends navigation={thisNavigation} user={thisUser} />,
      ProfileCommunity: (
        <ProfileCommunity navigation={thisNavigation} user={thisUser} />
      ),
      ProfileTab: <ProfileTab navigation={thisNavigation} user={thisUser} />,
      ProfileSettings: (
        <ProfileSettings navigation={thisNavigation} user={thisUser} />
      ),
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
      <SubPage
        page={profileSubPage}
        thisPost={posts}
        thisEvent={events}
        thisNavigation={navigation}
        thisUser={user}
      />
    </View>
  );
}
