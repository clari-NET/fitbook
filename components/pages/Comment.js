import React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';

export default function CommentScreen({ route }) {
  const { post } = route.params;

  // Fetch comments here, or pass them as a prop

  return (
    <ScrollView>
      <Text>Post: {post.content}</Text>
      {/* Render comments here */}
      <TextInput placeholder="Add a comment" />
    </ScrollView>
  );
}
