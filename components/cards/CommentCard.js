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
  Button,
  Card,
  Caption,
} from 'react-native-paper';
import { formatDistanceToNow } from 'date-fns';

const styles = StyleSheet.create({
  commentContainer: {
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
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
  commentContent: {
    marginBottom: 10,
    fontSize: 14,
    paddingLeft: 15,
  },
  commentActions: {
    flexDirection: 'row',
    paddingLeft: 15,
  },
  actionButton: {
    marginRight: 10,
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
        <Text style={styles.commentContent}>{comment.comment}</Text>
        <View style={styles.commentActions}>
          <Button
            mode="text"
            onPress={onLike}
            color={liked ? theme.colors.accent : theme.colors.text}
          >
            {`${liked ? 'Drop' : 'Lift'} ${comment.lifts}`}
          </Button>
        </View>
      </Card.Content>
    </Card>
  );
}
