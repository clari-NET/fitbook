import React, { useState, useEffect } from 'react';
import {
  View, TextInput, Button,
} from 'react-native';
import FriendsList from '../lists/FriendsList';

const sampleData = [
  {
    profilePhoto: 'https://nickelodeonuniverse.com/wp-content/uploads/Squidward.png',
    fitnessStats: {},
    friends: [],
    name: { first: 'Mo', last: 'Akbari' },
    username: 'KingMo',
  },
];

function Friends() {
  const [searchQuery, setSearchQuery] = useState('');
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    // get request to fetch friends list
    setFriendsList(sampleData);
  }, []);

  const handleSearch = (query) => {
    // need to make the live search to wait(to be delayed a bit)
    const filteredFriends = friendsList
      .filter((friend) => friend.name.toLowerCase().includes(query.toLowerCase())
        || friend.username.toLowerCase().includes(query.toLowerCase()));
    setFriendsList(filteredFriends);
    setSearchQuery(query);
  };

  const handleSendMessage = (username) => {
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
      <FriendsList friendsList={friendsList} handleSendMessage={handleSendMessage} />
    </View>
  );
}

export default Friends;
