import React, { useState, useEffect } from 'react';
import { useTheme, Text } from 'react-native-paper';
import {
  View, StyleSheet, Image, Button,
} from 'react-native';
import { docQuery } from '../../firebaseFiles/firebase.config';
import Feed from './Feed';

// const sampleData = {
//   id: 1,
//   name: 'Roller Demons',
//   banner: 'https://picsum.photos/700',
//   icon: 'U+1F6F9',
//   user: {
//     user_id: 12,
//     username: 'swolebraham',
//   },
//   location: 'San Diego, CA',
//   members: [
//     1, 2, 3, 4, 5,
//   ],
// };

const defaultImage = 'https://picsum.photos/700';
const defaultIcon = 'U+1F6F9';

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  bannerImage_container: {
    width: '100%',
    height: 100,
    // flex: 2,
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
});

export default function Community({ route }) {
  const [joined, setJoined] = useState(false);
  const [communityPosts, setCommunityPosts] = useState([]);
  const [communityEvents, setCommunityEvents] = useState([]);
  const { colors } = useTheme();
  const joinCommunityToggle = () => {
    setJoined(!joined);
  };

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
        <Text style={styles.bannerName}>
          {community.icon || defaultIcon}
          {community.name}
        </Text>
        {joined
          ? <Button title='Joined' onPress={joinCommunityToggle} />
          : <Button title='Join' onPress={joinCommunityToggle} />}
      </View>
      <Feed posts={communityPosts} events={communityEvents} />
    </View>
  );
}
