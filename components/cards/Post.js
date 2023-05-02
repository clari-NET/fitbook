/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {
  useTheme,
  Text,
  IconButton,
  Card,
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { doc, updateDoc } from 'firebase/firestore';
import db from '../../firebaseFiles/firebase.config';
import dropIcon from '../../assets/drop-orange.png';
import liftIcon from '../../assets/lift-orange.png';

const styles = StyleSheet.create({
  postContainer: {
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
    justifyContent: 'flex-end',
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

  useEffect(() => {
    const updateLike = async () => {
      try {
        const documentRef = doc(db, 'posts', post.id.toString());
        await updateDoc(documentRef, {
          lifts: likeCount,
        });
      } catch (error) {
        console.error('Error updating post like count:', error);
      }
    };

    updateLike();
  }, [liked, likeCount]);

  return (
    <Card style={styles.postContainer}>
      <Card.Content>
        <View style={styles.postHeader}>
          <TouchableOpacity onPress={() => {
            navigation.push('TabNavigator', {
              screen: 'Profile',
              params: {
                userId: post.user.user_id.toString(),
              },
            });
          }}
          >
            <Image
              style={styles.profilePhoto}
              source={{ uri: post.user.profilePhoto }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.push('TabNavigator', {
              screen: 'Profile',
              params: {
                userId: post.user.user_id.toString(),
              },
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
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
            <TouchableOpacity onPress={handleLike}>
              <Image
                source={liked ? dropIcon : liftIcon}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: liked ? theme.colors.accent : theme.colors.text,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 4 }}>{likeCount}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Pressable
              onPress={() => {
                navigation.navigate('Comment', {
                  post,
                  comments: post.comments,
                });
              }}
              style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
            >
              <IconButton
                icon="chat-outline"
                color={theme.colors.text}
              />
            </Pressable>
            <Text>{post.comments.length}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}
