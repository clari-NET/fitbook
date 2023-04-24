import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

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
  const { colors } = useTheme();

  const renderMessage = ({ item }) => (
    <>
      <Text>profile img </Text>
      <View style={[styles.container, { backgroundColor: colors.surface }]}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MessageList;
