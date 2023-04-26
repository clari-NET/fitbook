import React, {useState, useEffect, useCallback} from 'react';
import { View, TouchableOpacity, StyleSheet} from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { GiftedChat } from 'react-native-gifted-chat'
import DmForm from '../forms/DmForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Conversation({ currConvo, setCurrConvo }) {
  const { colors } = useTheme();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello friend',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Example user',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          //console.log('back button was pressed');
          setCurrConvo('DMList');
        }}
      >
        <Text>Back Button</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //console.log('profile img was pressed');
        }}
      >
        <Text>
          profile img:
          {currConvo}
        </Text>
      </TouchableOpacity>
      <View style={[styles.container, { backgroundColor: colors.surface }]}>
        <Text>Conversation Page</Text>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </View>
      <View>
        <DmForm />
      </View>
    </>
  );
}
