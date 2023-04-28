import React from 'react';
import { Card, Text, Avatar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

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

export default function DMCard({ user, handlePress }) {
  const navigation = useNavigation();
  return (
    <Card onPress={() => navigation.navigate('Conversation', { currConvo: user.name })}>
      <Card.Content>
        <View style={styles.cardRow}>
          <Avatar.Image
            size={50}
            source={{ uri: 'https://picsum.photos/700' }}
          />
          <View style={styles.cardContent}>
            <View style={styles.nameDate}>
              <Text variant='titleSmall'>{user.name}</Text>
              <Text variant='labelSmall'>time ago</Text>
            </View>
            <Text variant='bodySmall'>
              {user.body}
            </Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}
