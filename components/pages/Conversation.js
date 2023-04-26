import React, {useState, useEffect, useCallback} from 'react';
import { View, TouchableOpacity, StyleSheet} from 'react-native';
import { Text, useTheme, Avatar } from 'react-native-paper';
import { GiftedChat } from 'react-native-gifted-chat';
import { Appbar } from 'react-native-paper';

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
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Appbar.BackAction onPress={() => { setCurrConvo('DMList'); }} />
        <Avatar.Image
            size={50}
            source={{ uri: 'https://picsum.photos/700' }}
          />
        <TouchableOpacity
          onPress={() => {
            //console.log('profile img was pressed');
          }}
        >
          <Text>
            {currConvo}
          </Text>
        </TouchableOpacity>
      </View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </>
  );
}
