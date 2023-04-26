import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { useTheme, Button, Surface } from 'react-native-paper';

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
  dateContainer: {
    marginLeft: 'auto',
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
  const [likeCount, setLikeCount] = useState(post.lifts);
  const theme = useTheme();

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <Surface style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image
          style={styles.profilePhoto}
          source={{ uri: post.user.profilePhoto }}
        />
        <Text style={styles.username}>{post.user.username}</Text>
        <Text style={styles.community}>{post.community.name}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
          </Text>
        </View>
      </View>
      <Text style={styles.postContent}>{post.content}</Text>
      <View style={styles.postActions}>
        <Button
          mode="text"
          onPress={handleLike}
          color={liked ? theme.colors.accent : theme.colors.text}
        >
          {`${liked ? 'Drop' : 'Lift'} ${likeCount}`}
        </Button>
        <Button mode="text" onPress={() => {}}>
          Comment
        </Button>
        <Button mode="text" onPress={() => {}}>
          Share
        </Button>
      </View>
    </Surface>
  );
}
