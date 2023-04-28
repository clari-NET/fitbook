import React, {useState, useEffect, useCallback} from 'react';
import { View, TouchableOpacity, StyleSheet} from 'react-native';
import { Text, useTheme, Avatar } from 'react-native-paper';
import { GiftedChat } from 'react-native-gifted-chat';
import { Appbar } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { reset } from '../../redux/conversation/conversationSlice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    fontWeight: 'bold',
    marginRight: 5,
    flex: 1,
    marginLeft: 20,
  },
  cardRow: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
  },
});

export default function Conversation({ route, setCurrConvo }) {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);
  const { currConvo } = route.params;

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
      <View style={styles.cardRow}>
        <Appbar.BackAction onPress={() => { dispatch(reset()); }} />
        <Avatar.Image
            size={50}
            source={{ uri: 'https://picsum.photos/700' }}
        />
        <Text style={styles.username}>{currConvo}</Text>
        <Text>asdf</Text>
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
