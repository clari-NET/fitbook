import React from 'react';
import { Card, Text } from 'react-native-paper';
import { View } from 'react-native';

export default function Event({ event, handlePress }) {
  return (
    <Card onPress={() => handlePress(event)}>
      <Card.Content>
        <View style={{ flexDirection: 'row', width: '100%', height: '100%' }}>
          <Card.Cover style={{ width: '50%', height: 120, resizeMode: 'cover' }} source={{ uri: event.image }} />
          <View style={{ flex: 1, marginLeft: 20, overflow: 'hidden' }}>
            <Text variant='titleSmall'>{event?.location || 'any time'}</Text>
            <Text variant='bodySmall'>
              {event?.date_time.date || 'any day'}
              {event?.date_time.time || 'any time'}
            </Text>
            <Text variant='titleSmall'>{event?.name || 'untitled event'}</Text>
            <Text style={{ fontSize: 10 }}>{event?.description || 'get swole'}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}
