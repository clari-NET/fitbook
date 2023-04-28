import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  useTheme,
  Text,
  Card,
  Caption,
} from 'react-native-paper';
import { formatDistanceToNow } from 'date-fns';
import dropIcon from '../../assets/drop-orange.png';
import liftIcon from '../../assets/lift-orange.png';

const styles = StyleSheet.create({
  commentContainer: {
    marginBottom: 10,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    paddingLeft: 15,
  },
  profilePhoto: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginRight: 10,
  },
  username: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 5,
  },
  date: {
    color: '#999',
    fontSize: 10,
  },
  dateContainer: {
    marginLeft: 'auto',
  },
  commentContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
  },
  commentContent: {
    fontSize: 14,
    flex: 1,
  },
  commentActions: {
    flexDirection: 'row',
    paddingLeft: 15,
    position: 'absolute',
    right: 15,
  },
  actionButton: {
    marginRight: 10,
  },
  liftsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

});

export default function CommentCard({
  comment,
  onLike,
  liked,
  navigation,
}) {
  const theme = useTheme();

  return (
    <Card style={styles.commentContainer}>
      <Card.Content>
        <View style={styles.commentHeader}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Profile', {
              user: comment.user,
            });
          }}
          >
            <Image
              style={styles.profilePhoto}
              source={{ uri: comment.user.profilePhoto }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Profile', {
              user: comment.user,
            });
          }}
          >
            <Text style={styles.username}>{comment.user.username}</Text>
          </TouchableOpacity>
          <View style={styles.dateContainer}>
            <Caption>
              {formatDistanceToNow(new Date(comment.date), { addSuffix: true })}
            </Caption>
          </View>
        </View>
        <View style={styles.commentContentContainer}>
          <Text style={styles.commentContent}>{comment.comment}</Text>
          <View style={styles.liftsContainer}>
            <TouchableOpacity onPress={onLike}>
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
            <Text style={{ marginLeft: 5 }}>{comment.lifts}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}
