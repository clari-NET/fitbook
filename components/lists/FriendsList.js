import React from 'react';
import {
  FlatList,
} from 'react-native';
import FriendsCard from '../cards/FriendsCard';
import getNewID from '../utility/getNewID';

export default function FriendsList({ friendsList, handleSendMessage }) {
  return (
    <FlatList
      data={friendsList}
      renderItem={({ item }) => (
        <FriendsCard key={getNewID()} item={item} handleSendMessage={handleSendMessage} />
      )}
      keyExtractor={(item) => item.username.toString()}
    />
  );
}
