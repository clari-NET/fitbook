import React, { useState, useEffect } from 'react';
import {
  View, TextInput, Button,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import FriendsList from '../lists/FriendsList';
import { change } from '../../redux/conversation/conversationSlice';
import db, { docQuery } from '../../firebaseFiles/firebase.config';

function Friends({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [friendsList, setFriendsList] = useState([]);
  const [filteredFriends, setFilteredFriendsList] = useState([]);
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    // get request to fetch friends list
    const userRef = doc(db, 'users', auth.currentUser.uid);
    // get current user's id
    getDoc(userRef)
      .then((coms) => {
        const { friends } = coms.data();
        // get all friend's user profile based on current user's friend list
        return Promise.all(friends.map((friendId) => {
          const friendRef = doc(db, 'users', friendId);
          return getDoc(friendRef)
            .then((friend) => (
              friend.data()
            ));
        }))
          .then((friendData) => {
            setFriendsList(friendData);
            setFilteredFriendsList(friendData);
          });
      }).catch((err) => console.error(err));
  }, []);

  const handleSearch = (query) => {
    // need to make the live search to wait(to be delayed a bit)
    setFilteredFriendsList([...friendsList
      .filter((friend) => friend.name.first.toLowerCase().includes(query.toLowerCase())
      || friend.name.last.toLowerCase().includes(query.toLowerCase())
      || friend.username.toLowerCase().includes(query.toLowerCase()))]);
    // setFriendsList(filteredFriends);
    setSearchQuery(query);
  };

  const handleSendMessage = (username) => {
    dispatch(change(username));
    navigation.navigate('Messages');
    console.log(`started DM with: ${username}`);
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
