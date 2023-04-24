import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Conversation from './Conversation.js';

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

export default function MessageList() {
  const [messages, setMessages] = useState(sampleData);
  const [currConvo, setCurrConvo] = useState("DMList");
  const { colors } = useTheme();

  const renderMessage = ({ item }) => (
    <>
      <TouchableOpacity
          onPress={() => {
            console.log(item.id, ' profile img was pressed');
          }}>
        <Text>profile img </Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={() => {
            console.log(item.id, ' text was pressed');
            setCurrConvo(item.name.toString());
          }}>
        <View style={[styles.container, { backgroundColor: colors.surface }]}>
          <Text >{item.name}</Text>
          <Text >{item.body}...</Text>
        </View>
      </TouchableOpacity>
    </>
  );

  return currConvo === "DMList" ?
  (
    <FlatList
      data={messages}
      renderItem={renderMessage}
      keyExtractor={item => item.id.toString()}
    />
  )
  :
  <Conversation currConvo={currConvo} setCurrConvo={setCurrConvo}/>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
