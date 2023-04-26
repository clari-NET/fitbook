import React from 'react';
import { FlatList } from 'react-native';
import Post from '../cards/Post';

export default function PostList({ posts, onPostSelected }) {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <Post post={item} onPress={onPostSelected} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
