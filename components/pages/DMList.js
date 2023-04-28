import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Conversation from './Conversation';
import DMCard from '../cards/DMCard';
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../../redux/conversation/conversationSlice';
import {getAuth} from 'firebase/auth';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import db from '../../firebaseFiles/firebase.config';

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
  const [messages, setMessages] = useState({});
  const { colors } = useTheme();
  const { currConvo } = useSelector((state) => state.conversation);
  const dispatch = useDispatch();
  const auth = getAuth();

  const getConversations = async () => {
    try {
      const userRef = doc(db, 'users', auth.currentUser.uid);

      const userSnap = await getDoc(userRef);
      const convoIds = userSnap.data().DMs;

      const convos = {};
      convoIds.forEach(async (convo) => {
        const convoRef = doc(db, 'DMs', convo);
        // const convoSnap = await getDoc(convoRef);
        const unsubscribe = onSnapshot(convoRef, (snap) => {
          // setMessages(snap.data());
          setMessages(convos => ({ ...convos, [convo]: snap.data() }));
        });

        //let fetched = await convoSnap.data();
        //setMessages(convos => ({ ...convos, [convo]: fetched }));
      });
    } catch (e) {
      console.log(e);
      // dispatch(change('DMList'));
    }
  };

  useEffect(() => {
    getConversations();
  }, []);

  function handlePress(convo) {
    dispatch(change(convo.id));
  }

  if (Object.keys(messages).length === 0) {
    return (
      <View style={styles.container}>
        <Text>
          No conversations yet, Start One!
        </Text>
      </View>
);
  }

  return currConvo === 'DMList' ? (
    <FlatList
      data={Object.keys(messages)
        .sort((a, b) => {
          if (messages[a].lastUpdate > messages[b].lastUpdate) {
            return -1;
          }
          return 1;
        })}
      renderItem={({ item }) => <DMCard convo={messages[item]} handlePress={handlePress} />}
      keyExtractor={(item) => item.toString()}
    />
  ) : (
    <Conversation />
  );
}
