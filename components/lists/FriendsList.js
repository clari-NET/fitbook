import React from 'react';
import {
  FlatList,
} from 'react-native';
import FriendsCard from '../cards/FriendsCard';

export default function FriendsList({ friends, handleSendMessage }) {
  //console.log(handleSendMessage(''));
  return (
    <FlatList
      data={friends}
      renderItem={({item}) => (<FriendsCard item={item} handleSendMessage={handleSendMessage} />)}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
