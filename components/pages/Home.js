import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { docQuery, docOrQuery } from '../../firebaseFiles/firebase.config';
import Feed from './Feed';

export default function Home() {
  const [events, setEvents] = useState([]);
  const [posts, setPosts] = useState([]);
  const { data } = useSelector((state) => state.user);

  function getPostsAndEvents() {
    console.log(data);
    return Promise.all([
      docQuery('posts', [
        // data?.communities?.length > 0 ? ['community.id', 'in', data.communities] : null,
        // data?.communities?.length > 0 ? ['user.id', 'in', data.friends] : null,
      ]),
      docQuery('events'),
      // docQuery('events', [['community.id', 'in', data.communities]]),
    ]);
  }

  useEffect(() => {
    getPostsAndEvents()
      .then(([postsData, eventsData]) => {
        setPosts(postsData);
        setEvents(eventsData);
      })
      .catch(console.error);
  }, [data]);

  return (
    <Feed events={events} posts={posts} />
  );
}
