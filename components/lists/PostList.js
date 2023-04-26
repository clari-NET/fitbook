import React from 'react';
import { FlatList, View } from 'react-native';
import Post from '../cards/Post';

export default function PostList({ posts }) {
  const renderItem = ({ item }) => <Post post={item} />;

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
