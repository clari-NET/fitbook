import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useTheme, Button, Surface } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <Surface style={styles.postContainer}>
      <View style={styles.postHeader}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Profile', {
            user: post.user,
          });
        }}
        >
          <Image
            style={styles.profilePhoto}
            source={{ uri: post.user.profilePhoto }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Profile', {
            userId: post.user.user_id.toString(),
          });
        }}
        >
          <Text style={styles.username}>{post.user.username}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Community', {
            community: post.community,
          });
        }}
        >
          <Text style={styles.community}>{post.community.name}</Text>
        </TouchableOpacity>
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
        <Button
          mode="text"
          onPress={() => {
            navigation.navigate('Comment', {
              post,
              comments: post.comments,
            });
          }}
        >
          {`Comment ${post.comments.length}`}
        </Button>

        <Button mode="text" onPress={() => {}}>
          Share
        </Button>
      </View>
    </Surface>
  );
}
