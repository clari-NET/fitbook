import React, { useState } from 'react';
import { useTheme, Text } from 'react-native-paper';
import { View, ScrollView, StyleSheet } from 'react-native';
import DropDown from 'react-native-paper-dropdown';
import PostList from '../lists/PostList';
import EventList from '../lists/EventList';

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  bannerImage_container: {
    width: '100%',
    height: 100,
    flex: 2,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  banner_container: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FF6000',
  },
  bannerName: {
    color: '#FFF',
  },
  carousel_container: {
    flex: 4,
  },
  carousel: {
    width: '100%',
    height: '100%',
  },
  posts: {
    flex: 5,
  },
});

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

const filterList = [
  { value: 'hot', label: 'Hot' },
  { value: 'top', label: 'Top' },
  { value: 'now', label: 'Now' },
  { value: 'thisWeek', label: 'This Week' },
  { value: 'thisMonth', label: 'This Month' },
  { value: 'thisYear', label: 'This Year' },
  { value: 'allTime', label: 'All Time' },
];

export default function Feed({ section }) {
  const [filter, setFilter] = useState('Recent');
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <ScrollView>
      <EventList events={new Array(5).fill(0)} />
      <DropDown
        label={filter}
        mode='outlined'
        list={filterList}
        value={filter}
        setValue={setFilter}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
      />
      <View style={styles.posts}>
        <PostList posts={posts} />
      </View>
    </ScrollView>
  );
}
