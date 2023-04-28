import React, { useState, useEffect } from 'react';
import {
  View, TextInput, Button,
} from 'react-native';
import { useDispatch } from 'react-redux';
import FriendsList from '../lists/FriendsList';
import { change } from '../../redux/conversation/conversationSlice';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

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
  const [filteredFriends, setFilterdFriendsList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // get request to fetch friends list
    setFriendsList(sampleData);
    setFilterdFriendsList(sampleData);
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
