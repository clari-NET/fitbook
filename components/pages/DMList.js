import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const sampleData = [
  {
    id: 1,
    name: 'Arnold S.',
    profileImg: 'IMG1',
    body: 'Love your biceps bruh',
  },
  {
    id: 2,
    name: 'Ronnie C',
    profileImg: 'IMG2',
    body: 'Gummy or brownie',
  },
  {
    id: 3,
    name: 'Swolebrrrah',
    profileImg: 'IMG3',
    body: 'I like the limited edition to Khaki and army green...',
  },
];

const MessageList = () => {
  const [messages, setMessages] = useState(sampleData);

  const renderMessage = ({ item }) => (
    <>
      <Text>profile img </Text>
      <View>
        <Text >{item.name}</Text>
        <Text >{item.body}...</Text>
      </View>
    </>
  );

  return (
    <FlatList
      data={messages}
      renderItem={renderMessage}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default MessageList;
