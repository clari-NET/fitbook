import React, { useState } from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Conversation from './Conversation';
import DMCard from '../cards/DMCard';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function MessageList() {
  const [messages, setMessages] = useState(sampleData);
  const [currConvo, setCurrConvo] = useState('DMList');
  const { colors } = useTheme();

  function handlePress(user) {
    const username = user.name.toString();
    setCurrConvo(username);
  }

  return currConvo === 'DMList' ? (
    <FlatList
      data={sampleData}
      renderItem={({ item }) => <DMCard user={item} handlePress={handlePress} />}
      keyExtractor={(item) => item.id.toString()}
    />
  ) : (
    <Conversation currConvo={currConvo} setCurrConvo={setCurrConvo} />
  );
}
