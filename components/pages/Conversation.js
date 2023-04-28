import React, {useState, useEffect, useCallback} from 'react';
import { View, TouchableOpacity, StyleSheet} from 'react-native';
import { Text, useTheme, Avatar } from 'react-native-paper';
import { GiftedChat } from 'react-native-gifted-chat';
import { Appbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../redux/conversation/conversationSlice';
import { setDoc, doc, getDoc, serverTimestamp, updateDoc, collection, getDocs, query, where, orderBy, arrayUnion, getAll, map, onSnapshot } from 'firebase/firestore';
import db from '../../firebaseFiles/firebase.config';
import { getAuth } from 'firebase/auth';

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

export default function Conversation() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const auth = getAuth();
  // const otherUser = convo.user1.uid === auth.currentUser.uid ? convo.user2 : convo.user1;
  const { currConvo } = useSelector((state) => state.conversation);

  const [convo, setConvo] = useState({});

  const fetchConvo = async () => {
    try {
      const convoRef = doc(db, 'DMs', currConvo);
      const convoSnap = await getDoc(convoRef);
      const convoData = await convoSnap.data();

      if (Object.keys(convoData).length > 0) {
        setConvo(convoData);
      }
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchConvo();
  }, []);

  const onSend = async (messages) => {
    try {
      const convoRef = doc(db, 'DMs', convo.id);
      await updateDoc(convoRef, {
        messages: arrayUnion(messages[0]),
        latest: messages[0].text,
        lastUpdate: messages[0].createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (Object.keys(convo).length === 0) {
    return null;
  }
  let user = convo.user1.uid === auth.currentUser.uid ? convo.user2 : convo.user1;

  return (
    <>
      <View style={styles.cardRow}>
        <Appbar.BackAction onPress={() => { dispatch(reset()); }} />
        <Avatar.Image
            size={50}
            source={{ uri: 'https://picsum.photos/700' }}
        />
        <Text style={styles.username}>{currConvo}</Text>
      </View>
      <GiftedChat
        messages={convo.messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: user.uid,
        }}
      />
    </>
  );
}
