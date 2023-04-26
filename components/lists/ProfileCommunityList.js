import React from 'react';
import {
  FlatList,
} from 'react-native';
import ProfileCommunityCard from '../cards/ProfileCommunityCard';

export default function ProfileCommunityList({ communityList, handleFavorite, styles }) {
  return (
    <FlatList
      data={communityList}
      renderItem={({ item }) => (
        <ProfileCommunityCard item={item} handleSendMessage={handleFavorite} styles={styles}/>)}
      keyExtractor={(item) => item.name.toString()}
      styles={styles.banner_container}
    />
  );
}
