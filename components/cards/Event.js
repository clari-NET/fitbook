import React from 'react';
import { Card, Text } from 'react-native-paper';
import { View } from 'react-native';

export default function Event({ event, handlePress }) {
  return (
    <Card onPress={() => handlePress(event)}>
      <Card.Content>
        <View style={{ flexDirection: 'row', width: '100%', height: '100%' }}>
          <Card.Cover style={{ width: '50%', height: 120, resizeMode: 'cover' }} source={{ uri: 'https://picsum.photos/700' }} />
          <View style={{ flex: 1, marginLeft: 20 }}>
            <Text variant='titleSmall'>Granite, California</Text>
            <Text variant='bodySmall'>Tuesday, May 3rd 11:00AM PST</Text>
            <Text variant='titleSmall'>Event title:</Text>
            <Text variant='titleSmall'>Roller Demons take over granite park</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}
