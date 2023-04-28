import React, { useState, useEffect } from 'react';
import { useTheme, Text } from 'react-native-paper';
import {
  View, StyleSheet, Image,
} from 'react-native';
import { docQuery } from '../../firebaseFiles/firebase.config';
import Feed from './Feed';
import JoinCommunity from '../buttons/JoinCommunity';

const defaultImage = 'https://picsum.photos/700';
const defaultIcon = '🔥';

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  bannerImage_container: {
    width: '100%',
    height: 100,
    flex: 1,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  banner_container: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FF6000',
  },
  banner_wrapper: {
    flexDirection: 'row',
    flex: 0.5,
    alignItems: 'center',
  },
  bannerName: {
    color: '#FFF',
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  bannerIcon: {
    fontSize: 26,
    paddingLeft: 15,
  },
  join: {
    position: 'absolute',
    right: 0,
  },
  feed: {
    flex: 6,
  },
});

export default function Community({ route }) {
  const [communityPosts, setCommunityPosts] = useState([]);
  const [communityEvents, setCommunityEvents] = useState([]);
  const { colors } = useTheme();

  const { community } = route.params;

  useEffect(() => {
    async function fetchCommunityData() {
      const posts = await docQuery('posts', [['community.id', '==', community.id]]);
      setCommunityPosts(posts);

      const events = await docQuery('events', [['community.id', '==', community.id]]);
      setCommunityEvents(events);
    }
    fetchCommunityData();
  }, [community.id]);

  return (
    <View style={[styles.main_container, { backgroundColor: colors.surface }]}>
      <View style={styles.bannerImage_container}>
        <Image
          style={styles.bannerImage}
          source={{ uri: community.banner || defaultImage }}
        />
      </View>
      <View style={styles.banner_container}>
        <View style={styles.banner_wrapper}>
          <Text style={styles.bannerIcon}>
            {community.icon || defaultIcon}
          </Text>
          <Text style={styles.bannerName}>
            {community.name}
          </Text>
        </View>
        <View styles={styles.join}>
          <JoinCommunity communityId={community.id} />
        </View>
      </View>
      <View style={styles.feed}>
        <Feed posts={communityPosts} events={communityEvents} />
      </View>
    </View>
  );
}
