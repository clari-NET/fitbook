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

const sampleData = [
  {
    profilePhoto: 'https://nickelodeonuniverse.com/wp-content/uploads/Squidward.png',
    fitnessStats: {},
    friends: [],
    name: { first: 'Mo', last: 'Akbari' },
    username: 'KingMo',
  },
];

function Friends({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [friendsList, setFriendsList] = useState([]);
  const [filteredFriends, setFilteredFriendsList] = useState([]);
  const dispatch = useDispatch();
  const auth = getAuth();
  // console.log('Friends', navigation);

  useEffect(() => {
    // get request to fetch friends list
    const userRef = doc(db, 'users', auth.currentUser.uid);
    getDoc(userRef)
      .then((coms) => {
        const { friends } = coms.data();
        const friendData = [];
        friends.forEach((friendId) => {
          const friendRef = doc(db, 'users', friendId);
          getDoc(friendRef)
            .then((friend) => {
              const individual = friend.data();
              friendData.push(individual);
            })
            .catch((err) => console.error(err));
        });
        setFriendsList(friendData);
        setFilteredFriendsList(friendData);
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
