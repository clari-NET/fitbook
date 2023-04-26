import React, { useState, useEffect } from 'react';
import {
  View, TextInput, Button,
} from 'react-native';
import ProfileCommunityList from '../lists/ProfileCommunityList';

const sampleData = [
  {
    name: 'Best Community',
    banner: 'https://static.wikia.nocookie.net/spongebobgalaxy/images/2/23/Squidwards_House.png/revision/latest?cb=20180707172828',
    tag: 'BestTag',
  },
];

function Friends() {
  const [searchQuery, setSearchQuery] = useState('');
  const [communityList, setCommunityList] = useState([]);

  useEffect(() => {
    // get request to fetch friends list
    setFriendsList(sampleData);
  }, []);

  const handleSearch = (query) => {
    // need to make the live search to wait(to be delayed a bit)
    const filteredCommunities = communityList
      .filter((community) => community.name.toLowerCase().includes(query.toLowerCase())
        || community.tag.toLowerCase().includes(query.toLowerCase()));
    setCommunityList(filteredCommunities);
    setSearchQuery(query);
  };

  const handleFavorite = (username) => {
    console.log(`favorited ${username}`);
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
      <ProfileCommunityList communityList={communityList} handleFavorite={handleFavorite} />
    </View>
  );
}

export default Friends;
