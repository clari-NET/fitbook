import React from 'react';
import {
  View, Button, Text,
} from 'react-native';

export default function FriendsCard({ item, handleSendMessage}) {
  // console.log(props);
  return (
    <View>
      <View>
        <Text>{item.image}</Text>
      </View>
      <View>
        <Text>{item.name}</Text>
        <Text>
          @
          {item.username}
        </Text>
        <Text>{item.date}</Text>
      </View>
      <View>
        <Button title="message" onPress={() => handleSendMessage(item)} />
      </View>
    </View>
  );
}
