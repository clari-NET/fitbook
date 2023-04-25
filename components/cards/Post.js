import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  postContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  community: {
    fontStyle: 'italic',
    marginRight: 5,
  },
  date: {
    color: '#999',
  },
  postContent: {
    marginBottom: 10,
  },
  postActions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginRight: 10,
  },
});

export default function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image
          style={styles.profilePhoto}
          source={{ uri: 'https://source.unsplash.com/random?gym,fitness' }}
        />
        <Text style={styles.username}>{post.username}</Text>
        <Text style={styles.community}>{post.community}</Text>
        <Text style={styles.date}>
          {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
        </Text>
      </View>
      <Text style={styles.postContent}>Post content here</Text>
      <View style={styles.postActions}>
        <TouchableOpacity onPress={handleLike} style={styles.actionButton}>
          <Text>
            {liked ? 'Drop' : 'Lift'}
            (
            {likeCount}
            )
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
