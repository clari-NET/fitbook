import React, { useState, useEffect } from 'react';
import { Card, Text, Avatar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { getAuth } from 'firebase/auth';

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
    marginLeft: 20,
  },
  nameDate: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default function DMCard({ convo, handlePress }) {
  const auth = getAuth();

  const otherUser = convo.user1.uid === auth.currentUser.uid ? convo.user2 : convo.user1;
  return (
    <Card onPress={() => handlePress(convo)}>
      <Card.Content>
        <View style={styles.cardRow}>
          <Avatar.Image
            size={50}
            source={{ uri: otherUser.photo }}
          />
          <View style={styles.cardContent}>
            <View style={styles.nameDate}>
              <Text variant='titleSmall'>{otherUser.username}</Text>
              <Text variant='labelSmall'>{convo.lastUpdate}</Text>
            </View>
            <Text variant='bodySmall'>
              {convo.latest}
            </Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}
