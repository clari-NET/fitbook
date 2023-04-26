import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import DropDown from 'react-native-paper-dropdown';
import PostList from '../lists/PostList';
import EventList from '../lists/EventList';

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

export default function Feed() {
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
      <View>
        <PostList posts={posts} />
      </View>
    </ScrollView>
  );
}
