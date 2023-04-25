import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Post() {
  const [likes, setLikes] = useState(0);

  const increaseLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image
          style={styles.profilePhoto}
          source={{ uri: 'https://example.com/profile-photo-url.jpg' }}
        />
        <Text style={styles.username}>Username</Text>
        <Text style={styles.community}>Community</Text>
        <Text style={styles.date}>5 minutes ago</Text>
      </View>
      <Text style={styles.postContent}>Post content here</Text>
      <View style={styles.postActions}>
        <TouchableOpacity onPress={increaseLikes} style={styles.actionButton}>
          <Text>Lift ({likes})</Text>
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
