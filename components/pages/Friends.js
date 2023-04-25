import React, { useState, useEffect } from 'react';
import {
  View, TextInput, Button,
} from 'react-native';
import FriendsList from '../lists/FriendsList';

const sampleData = [
  {
    id: 1,
    image: 'PROFILE',
    name: 'Johnathan S.',
    username: 'bigJ',
  },
  {
    id: 2,
    image: 'PROFILE',
    name: 'Elliot T.',
    username: 'ChampE',
  },
  {
    id: 3,
    image: 'PROFILE',
    name: 'Brett T.',
    username: 'notoriousB',
  },
  {
    id: 4,
    image: 'PROFILE',
    name: 'Nic M.',
    username: 'NicJam',
  },
];

function Friends() {
  const [searchQuery, setSearchQuery] = useState('');
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // get request to fetch friends list
    setFriends(sampleData);
  }, []);

  const handleSearch = (query) => {
    // need to make the live search to wait(to be delayed a bit)
    const filteredFriends = friends
      .filter((friend) => friend.name.toLowerCase().includes(query.toLowerCase())
        || friend.username.toLowerCase().includes(query.toLowerCase()));
    setFriends(filteredFriends);
    setSearchQuery(query);
  };

  const handleSendMessage = (event) => {
    console.log(`started DM with: ${event.name}`);
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
      <View>
        <Button title='Event' onPress />
        <Button title="Friends" onPress />
        <Button title="Community" onPress />
        <Button title="Profile" onPress />
      </View>
      <FriendsList friends={friends} handleSendMessage={handleSendMessage} />

    </View>
  );
}

export default Friends;
