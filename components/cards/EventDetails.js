import React from 'react';
import { Card, Button, Text } from 'react-native-paper';

export default function Event({ event, close }) {
  return (
    <Card>
      <Card.Cover
        style={{ width: '100%' }}
        source={{ uri: 'https://picsum.photos/700' }}
      />
      <Card.Content>
        <Text variant='titleSmall'>{event.name || 'untitled event'}</Text>
        <Text variant='titleSmall'>{event.location || 'any place'}</Text>
        <Text variant='bodySmall'>
          {event.date_time.date || 'any day'}
          {event.date_time.time || 'any time'}
        </Text>
        <Text variant='titleSmall'>Event Description:</Text>
        <Text variant='bodySmall'>
          {event.description || 'no description given'}
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={close}>Eat Cheetos</Button>
        <Button onPress={close}>Get Shredded</Button>
      </Card.Actions>
    </Card>
  );
}
