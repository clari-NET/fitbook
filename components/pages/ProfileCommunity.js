import React, { useState, useEffect } from 'react';
import {
  View, TextInput, StyleSheet
} from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import ProfileCommunityList from '../lists/ProfileCommunityList';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../firebaseFiles/firebase.config';

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

function ProfileCommunity({ navigation, user}) {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [communitiesList, setCommunitiesList] = useState([]);
  const [filteredCommunities, setFilterdCommunities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  console.log(user.communities)
  useEffect(() => {
    // get request to fetch friends list
    Promise.all(user.communities.map(id => getDoc(doc(db, 'communities', String(id)))))
      .then((resArray) => {
        console.log(resArray[0].data())
        const data = resArray.map(res => res.data());
        console.log('Data:',data);
        setCommunitiesList(data);
        setFilterdCommunities(data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        console.log(err);
      });
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
      <ProfileCommunityList communityList={filteredCommunities}
        handleFavorite={handleFavorite} styles={styles}/>
    </View>
  );
}

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
