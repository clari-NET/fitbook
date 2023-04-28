import React, { useState, useEffect } from 'react';
import { docOrQuery } from '../../firebaseFiles/firebase.config';
import Feed from './Feed';

export default function Home({ user }) {
  const [events, setEvents] = useState([]);
  const [posts, setPosts] = useState([]);

  function getPostsAndEvents() {
    return Promise.all([
      docOrQuery('posts', [
        ['community.id', 'in', user.communities],
        ['user.id', 'in', user.friends],
      ]),
      docOrQuery('events', ['community.id', 'in', user.communities]),
    ]);
  }

  useEffect(() => {
    getPostsAndEvents()
      .then(([postsData, eventsData]) => {
        setPosts(postsData);
        setEvents(eventsData);
      })
      .catch(console.error);
  }, []);

  return (
    <Feed events={events} posts={posts} />
  );
}
