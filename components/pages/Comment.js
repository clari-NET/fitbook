/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  ScrollView,
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useSelector } from 'react-redux';
import { doc, updateDoc } from 'firebase/firestore';
import { Button } from 'react-native-paper';
import uuid from 'react-native-uuid';
import db from '../../firebaseFiles/firebase.config';
import Post from '../cards/Post';
import CommentCard from '../cards/CommentCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default function CommentsList({ route, navigation }) {
  const { post } = route.params;
  const [comments, setComments] = useState(route.params.comments);
  const [likedComments, setLikedComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const commenter = useSelector((state) => state.user).data;

  const handleCommentLike = async (comment) => {
    const isLiked = likedComments.includes(comment.comment_id);
    const updatedLifts = isLiked ? comment.lifts - 1 : comment.lifts + 1;
    const updatedComments = comments.map(
      (c) => (c.comment_id === comment.comment_id ? { ...c, lifts: updatedLifts } : c),
    );

    setComments(updatedComments);

    if (isLiked) {
      setLikedComments(likedComments.filter((id) => id !== comment.comment_id));
    } else {
      setLikedComments([...likedComments, comment.comment_id]);
    }

    try {
      const documentRef = doc(db, 'posts', post.id.toString());
      await updateDoc(documentRef, {
        comments: updatedComments,
      });
    } catch (error) {
      console.error('Error updating comment like count:', error);
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    const newCommentObj = {
      comment_id: uuid.v4(),
      user: {
        id: commenter.id,
        name: `${commenter.name.first} ${commenter.name.last}`,
        profilePhoto: 'https://randomuser.me/api/portraits/men/44.jpg', // commenter.profilePhoto
        username: commenter.username,
      },
      comment: newComment,
      lifts: 0,
      report: false,
      date: new Date().getTime(),
    };

    const updatedComments = [...comments, newCommentObj];
    setComments(updatedComments);
    setNewComment('');
    try {
      const documentRef = doc(db, 'posts', post.id.toString());
      await updateDoc(documentRef, {
        comments: updatedComments,
      });
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Post post={post} />
        {comments.map((comment) => (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            onLike={() => handleCommentLike(comment)}
            liked={likedComments.includes(comment.comment_id)}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
          onChangeText={(text) => setNewComment(text)}
          value={newComment}
        />
        <Button onPress={handleAddComment}>Submit</Button>
      </View>
    </SafeAreaView>
  );
}
