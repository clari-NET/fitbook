import React, { useState, useEffect } from 'react';
import {
  View, TextInput, StyleSheet
} from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import ProfileCommunityList from '../lists/ProfileCommunityList';

const sampleData = [
  {
    name: 'Best Community',
    banner: 'https://static.wikia.nocookie.net/spongebobgalaxy/images/2/23/Squidwards_House.png/revision/latest?cb=20180707172828',
    tag: 'BestTag',
    favorite: true,
  },
  {
    name: 'Second Best Community',
    banner: 'https://static.wikia.nocookie.net/spongebobgalaxy/images/2/23/Squidwards_House.png/revision/latest?cb=20180707172828',
    tag: 'SecondBestTag',
    favorite: false,
  },
];

function ProfileCommunity() {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [communityList, setCommunityList] = useState([]);
  const [filteredCommunityList, setFilteredCommunityList] = useState([]);

  useEffect(() => {
    // get request to fetch friends list
    setCommunityList(sampleData);
    setFilteredCommunityList(sampleData);
  }, []);

  const handleSearch = (query) => {
    // need to make the live search to wait(to be delayed a bit)
    setFilteredCommunityList([...communityList
      .filter((community) => community.name.toLowerCase().includes(query.toLowerCase())
        || community.tag.toLowerCase().includes(query.toLowerCase()))]);
    setSearchQuery(query);
  };

  const handleFavorite = (username) => {
    console.log(`favorited ${username}`);
  };

  return (
    <View style={styles.main_container}>
      <View>
        <TextInput
          placeholder="Search..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <ProfileCommunityList communityList={filteredCommunityList}
        handleFavorite={handleFavorite} styles={styles}/>
    </View>
  );
}
console.log('hello from community');

export default ProfileCommunity;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  bannerImage_container: {
    width: '100%',
    height: 100,
    flex: 2,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  banner_container: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  bannerName: {
    color: '#FFF',
  },
  posts: {
    flex: 5,
  },
  favStar: {
    width: 20,
  },
});
