import React from 'react';
import { Card, Text } from 'react-native-paper';
import { View } from 'react-native';

export default function CommunityCard({ community, handlePress }) {
  return (
    <Card onPress={() => handlePress(community)}>
      <Card.Content>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
          <View style={{ flex: 1, marginRight: 20 }}>
            <Text variant='titleSmall'>{community.name}</Text>
            <Text variant='bodySmall'>{community.description}</Text>
          </View>
          <Card.Cover style={{ width: 100, height: 100, resizeMode: 'cover' }} source={{ uri: community.banner }} />
        </View>
      </Card.Content>
    </Card>
  );
}
