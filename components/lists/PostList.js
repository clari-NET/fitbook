import React from 'react';
<<<<<<< HEAD
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
=======
import { View } from 'react-native';
import Post from '../cards/Post';

export default function PostList({ posts }) {
  return (
    <View>
      {posts.length > 0 && posts.map((post) => (<Post post={post} key={post.id} />))}
>>>>>>> main
    </View>
  );
}
