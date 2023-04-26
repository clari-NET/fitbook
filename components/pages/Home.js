import React, {useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'react-native-paper';
import EventList from '../lists/EventList';
import PostList from '../lists/PostList';
import Feed from './Feed';

export default function Home({ theme }) {
  const [showEvent, setShowEvent] = useState(true);
  const { colors } = useTheme();

  const toggleComponent = () => {
    setShowEvent(!showEvent);
  };

  const posts = [
    {
      id: '1',
      profilePhotoUrl: 'https://example.com/profile-photo-url1.jpg',
      username: 'User1',
      community: 'Community1',
      date: '2023-04-24T10:30:00.000Z',
      content: 'Post content 1',
    },
    {
      id: '2',
      profilePhotoUrl: 'https://example.com/profile-photo-url2.jpg',
      username: 'User2',
      community: 'Community2',
      date: '2023-04-24T11:00:00.000Z',
      content: 'Post content 2',
    },
  ];

  return (
      <Feed />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
