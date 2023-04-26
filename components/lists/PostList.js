import React from 'react';
import { FlatList, View, Text } from 'react-native';
import Post from '../cards/Post';

export default function PostList({ posts }) {
  const renderItem = ({ item }) => <Post post={item} />;

  if (posts.length === 0) {
    return (
      <View>
        <Text>No posts found.</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
