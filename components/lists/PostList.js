import React from 'react';
import { View } from 'react-native';
import Post from '../cards/Post';

export default function PostList({ posts }) {
  return (
    <View>
      {posts.length > 0 && posts.map((post) => (<Post post={post} key={post.id} />))}
    </View>
  );
}
