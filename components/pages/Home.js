import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { docQuery, docOrQuery } from '../../firebaseFiles/firebase.config';
import Feed from './Feed';

export default function Home() {
  const [events, setEvents] = useState([]);
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.user).data;

  function getPostsAndEvents() {
    const postQueryConditions = [];
    const eventQueryConditions = [];
    if (user?.communities?.length > 0) {
      postQueryConditions.push(['community.id', 'in', user.communities]);
      eventQueryConditions.push(['community.id', 'in', user.communities]);
    }
    if (user?.friends?.length > 0) {
      postQueryConditions.push(['user.id', 'in', user.friends]);
    }
    return Promise.all([
      postQueryConditions.length === 0 ? [] : docOrQuery('posts', postQueryConditions, 'date'),
      eventQueryConditions.length === 0 ? [] : docQuery('events', eventQueryConditions, 'date_time.date'),
    ]);
  }

  useEffect(() => {
    getPostsAndEvents()
      .then(([postsData, eventsData]) => {
        setPosts(postsData);
        setEvents(eventsData);
      })
      .catch(console.error);
  }, [user]);

  return (
    <Feed events={events} posts={posts} />
  );
}
