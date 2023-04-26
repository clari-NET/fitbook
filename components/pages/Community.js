import React, { useState } from 'react';
import { useTheme } from 'react-native-paper';
import {
  View, ScrollView, Text, StyleSheet, Image, Button,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import PostList from '../lists/PostList';
import EventList from '../lists/EventList';

const sampleData = {
  id: 1,
  name: 'Roller Demons',
  banner: 'https://picsum.photos/700',
  icon: 'U+1F6F9',
  user: {
    user_id: 12,
    username: 'swolebraham',
  },
  location: 'San Diego, CA',
  members: [
    1, 2, 3, 4, 5,
  ],
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

export default function Community() {
  const [joined, setJoined] = useState(false);
  const [filter, setFilter] = useState('Recent');
  const { colors } = useTheme();
  // some function for 'onClick => navigateTo(Community)

  const joinCommunityToggle = () => {
    setJoined(!joined);
  };

  const postFilterList = [
    { key: 1, value: 'Recent' },
    { key: 2, value: 'Hot' },
    { key: 3, value: 'Most upvoted' },
  ];

  return (
    <View style={[styles.main_container, { backgroundColor: colors.surface }]}>
      <View style={styles.bannerImage_container}>
        <Image
          style={styles.bannerImage}
          source={{ uri: sampleData.banner }}
        />
      </View>
      <View style={styles.banner_container}>
        <Text style={styles.bannerName}>
          {sampleData.icon} {sampleData.name}
        </Text>
        {joined
          ? <Button title='Joined' onPress={joinCommunityToggle} />
          : <Button title='Join' onPress={joinCommunityToggle} />}
      </View>
      <View style={styles.carousel_container}>
        <ScrollView style={styles.carousel}>
          <EventList events={new Array(5).fill(0)} />
        </ScrollView>
      </View>
      <View style={styles.posts}>
        <SelectList
          setSelected={(val) => setFilter(val)}
          data={postFilterList}
          save='value'
          search={false}
          // onSelect={filter function}
        />
        <ScrollView>
          <PostList posts={posts} />
        </ScrollView>
      </View>
    </View>
  );
}

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
