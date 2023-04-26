import React from 'react';
import { FlatList, View } from 'react-native';
import Post from '../cards/Post';

export default function PostList({ posts }) {
  const renderItem = ({ item }) => <Post post={item} />;

  return (
    <View>
      {posts.length > 0 && posts.map((post) => (<Post post={post} key={post.id} />))}
      {/* <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}
    </View>
  );
}
