import React from 'react';
import {
  FlatList,
} from 'react-native';
import FriendsCard from '../cards/FriendsCard';

export default function FriendsList({ friendsList, handleSendMessage }) {
  console.log(friendsList)
  return (
    <FlatList
      data={friendsList}
      renderItem={({ item }) => (<FriendsCard item={item} handleSendMessage={handleSendMessage} />)}
      keyExtractor={(item) => item.username.toString()}
    />
  );
}
