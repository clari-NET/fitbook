import React from 'react';
import {
  Button, Title, Card, Avatar,
} from 'react-native-paper';
import {
  View, StyleSheet
} from 'react-native';

export default function FriendsCard({ item, handleSendMessage }) {
  const {
    profile_photo,
    fitnessStats,
    name,
    username,
  } = item;

  const handleImageError = () => {
    console.log('profile image load failed')
  }

  return (
    <Card style={styles.card}>
      <View style={styles.content}>
        {profile_photo ? (
          <Avatar.Image
            source={{ uri: profile_photo}}
            size={64}
            onError={handleImageError}
          />
        ) : (
          <Avatar.Text label="JS" size={64} style={styles.avatar} />
        ) }
        <View>
          <Card.Content>
            <Title variant='titleSmall'>{`${name.first} ${name.last}`}</Title>
            <Title variant='bodySmall'>{`${username}`}</Title>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => handleSendMessage(username)}>Message</Button>
          </Card.Actions>
        </View>
      </View>
    </Card>
  );
}
const styles = StyleSheet.create({

  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    marginHorizontal: 10,
  }
});
