import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, FlatList, Button,
} from 'react-native';

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

function FriendsList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // get request to fetch friends list
    setFriends(sampleData);
  }, []);

  const handleSearch = (query) => {
    // need to make the live search to wait(to be delayed a bit)
    const filteredFriends = sampleData
      .filter((friend) => friend.name.toLowerCase().includes(query.toLowerCase())
      || friend.username.toLowerCase().includes(query.toLowerCase()));
    setFriends(filteredFriends);
    setSearchQuery(query);
  };

  const handleSendMessage = (event) => {
    console.log(`started DM with: ${event.name}`);
  };

  const renderCard = ({ item }) => (
    <View>
      <View>
        {/* need to put img */}
        <Text>{item.image}</Text>
      </View>
      <View>
        <Text>{item.name}</Text>
        <Text>
          @
          {item.username}
        </Text>
        <Text>{item.date}</Text>
      </View>
      <View>
        <Button title="message" onPress={() => handleSendMessage(item)} />
      </View>
    </View>
  );

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
        <Button title="Event" onPress={(e) => console.log(e)} />
        <Button title="Friends" onPress />
        <Button title="Community" onPress />
        <Button title="Profile" onPress />
      </View>
      <FlatList
        data={friends}
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default FriendsList;
