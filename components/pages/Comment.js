import React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';

export default function CommentScreen({ route, navigation }) {
  const { post, comments } = route.params;

  return (
    <ScrollView>
      <Text>Post: {post.content}</Text>
      {/* Render comments here */}
      {comments.map((comment) => (
        <View key={comment.comment_id}>
          <Text>{comment.user.username}: {comment.comment}</Text>
        </View>
      ))}
      <TextInput placeholder="Add a comment" />
    </ScrollView>
  );
}
