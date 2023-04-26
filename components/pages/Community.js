import React, { useState } from 'react';
import { useTheme, Text } from 'react-native-paper';
import {
  View, ScrollView, StyleSheet, Image, Button,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Post from '../cards/Post';
import EventList from '../lists/EventList';
import Feed from './Feed';

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

export default function Community() {
  const [joined, setJoined] = useState(false);
  const [filter, setFilter] = useState('Recent');
  const { colors } = useTheme();
  // some function for 'onClick => navigateTo(Community)

  const joinCommunityToggle = () => {
    setJoined(!joined);
  };

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
        <ScrollView>
          <Feed
            section='community'
          />
        </ScrollView>
        <ScrollView>
          <Post communities={new Array(3).fill(0)} />
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
