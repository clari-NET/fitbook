import React from 'react';
import {
  FlatList,
} from 'react-native';
import ProfileCommunityCard from '../cards/ProfileCommunityCard';

export default function ProfileCommunityList({ communityList, handleFavorite }) {
  console.log(communityList);
  return (
    <FlatList
      data={communityList}
      renderItem={({ item }) => (
        <ProfileCommunityCard item={item} handleSendMessage={handleFavorite} />)}
      keyExtractor={(item) => item.username.toString()}
    />
  );
}
