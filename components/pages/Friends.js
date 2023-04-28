import React, { useState, useEffect } from 'react';
import {
  View, TextInput, Button,
} from 'react-native';
import { useDispatch } from 'react-redux';
import FriendsList from '../lists/FriendsList';
import { change } from '../../redux/conversation/conversationSlice';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import {getAuth} from 'firebase/auth';
import { setDoc, doc, getDoc, serverTimestamp, updateDoc, collection, getDocs, query, where, orderBy, arrayUnion } from 'firebase/firestore';
import uuid from 'react-native-uuid';
import db from '../../firebaseFiles/firebase.config';

const sampleData = [
  {
    profilePhoto: 'https://nickelodeonuniverse.com/wp-content/uploads/Squidward.png',
    fitnessStats: {},
    friends: ['abMZ06958kM43IA3YKBMbV1tzWi1'],
    name: { first: 'Mo', last: 'Akbari' },
    username: 'testuser',
    id: 'abMZ06958kM43IA3YKBMbV1tzWi1',
  },
];

function Friends({ navigation, user }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [friendsList, setFriendsList] = useState([]);
  const [filteredFriends, setFilterdFriendsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const auth = getAuth();
  console.log(user.friends);

  useEffect(() => {
    // get request to fetch friends list
    Promise.all(user.friends.map(id => getDoc(doc(db, 'users', String(id)))))
      .then((resArray) => {
        console.log(resArray[0].data())
        const data = resArray.map(res => res.data());
        console.log('Data:',data);
        setFriendsList(data);
        setFilterdFriendsList(data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        console.log(err);
      });
  }, []);

  const handleSearch = (query) => {
    // need to make the live search to wait(to be delayed a bit)
    setFilterdFriendsList([...friendsList
      .filter((friend) => friend.name.first.toLowerCase().includes(query.toLowerCase())
      || friend.name.last.toLowerCase().includes(query.toLowerCase())
      || friend.username.toLowerCase().includes(query.toLowerCase()))]);
    // setFriendsList(filteredFriends);
    setSearchQuery(query);
  };

  const handleSendMessage = async (username) => {
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', username));
      const allFriends = await getDocs(q);
      const friends = [];
      allFriends.forEach((doc) => {
        friends.push({ id: doc.id, data: doc.data() });
      });
      if (friends.length !== 1) {
        return;
      }
      const friend = friends[0];

      const userRef = doc(db, 'users', auth.currentUser.uid);
      const userDoc = await getDoc(userRef);
      const user = userDoc.data();

      let found = false;
      friend.data.DMs.forEach((DM) => {
        if (user.DMs.includes(DM)) {
          found = true;
          dispatch(change(DM));
          navigation.navigate('Messages');
        }
      });

      if (!found) {
        const currentId = uuid.v4();
        await setDoc(doc(db, 'DMs', currentId), {
          id: currentId,
          messages: [],
          user1: {
            photo: user.profile_photo,
            uid: auth.currentUser.uid,
            username: auth.currentUser.displayName,
          },
          user2: {
            photo: friend.data.profile_photo,
            uid: friend.id,
            username: friend.data.username,
          },
          latest: 'no messages yet',
          lastUpdate: Date.now(),
        });
        dispatch(change(currentId));
        const currentUserRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(currentUserRef, {
          DMs: arrayUnion(currentId),
        });
        const friendRef = doc(db, 'users', friend.id);
        await updateDoc(friendRef, {
          DMs: arrayUnion(currentId),
        });
      }
    } catch (e) {
      console.log(e);
    }
    navigation.navigate('Messages');
  };

  return (
    <View>
      <View>
        <TextInput
          placeholder="Search..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FriendsList friendsList={filteredFriends} handleSendMessage={handleSendMessage} />
    </View>
  );
}

export default Friends;
