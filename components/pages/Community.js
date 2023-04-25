import React, { useState } from 'react';
import { useTheme } from 'react-native-paper';
import {
  View, ScrollView, Text, StyleSheet, Image, Button,
} from 'react-native';
import Post from '../cards/Post';
import EventList from '../lists/EventList';

export default function Community() {
  const [joined, setJoined] = useState(false);
  const { colors } = useTheme();
  // some function for 'onClick => navigateTo(Community)

  const joinCommunity = () => {
    setJoined(!joined);
  };

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
          ? <Button title='Joined' onPress={joinCommunity} />
          : <Button title='Join' onPress={joinCommunity} />}
      </View>
      <View style={styles.carousel_container}>
        <ScrollView style={styles.carousel}>
          <EventList events={new Array(5).fill(0)} />
        </ScrollView>
      </View>
      <ScrollView style={styles.posts}>
        <Post communities={new Array(3).fill(0)} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    // justifyContent: 'flex-start',
  },
  bannerImage_container: {
    width: '100%',
    height: 100,
    flex: 1.5,
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
    flex: 2,
  },
  carousel: {
    width: '100%',
    height: '100%',
  },
  posts: {
    flex: 5,
  },
});
