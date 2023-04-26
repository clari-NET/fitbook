import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { getDocs, collection, query, where } from 'firebase/firestore';
import db from '../../firebaseFiles/firebase.config';
import CommunityCard from '../cards/CommunityCard';
import TextBanner from '../utility/TextBanner';

async function getCommunities() {
  const q = query(collection(db, 'testCommunities'));
  const comDocs = await getDocs(q);
  const communities = comDocs.docs.map((doc) => doc.data());
  return communities;
}

export default function CommunityList({ navigation }) {
  const [searchVal, setSearchVal] = useState('');
  const [communities, setCommunities] = useState([]);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    getCommunities(searchVal)
      .then((coms) => {
        setCommunities(coms);
        setFiltered(coms);
      })
      .catch((err) => console.error(err));
  }, []);

  function handleSearch(val) {
    setSearchVal(val);
    setFiltered(
      communities.filter((community) => (
        community.name.toLowerCase().includes(val.toLowerCase())
      )),
    );
  }

  function handlePress(community) {
    navigation.navigate('Community', { community });
  }

  return (
    <ScrollView>
      <TextInput
        label='Search for a community'
        mode='outlined'
        value={searchVal}
        onChangeText={(val) => handleSearch(val)}
      />
      <TextBanner text='Based on your search' />
      {filtered.length !== 0 &&
        filtered.map((community) => (
          <CommunityCard
            community={community}
            key={community.name}
            handlePress={handlePress}
          />
        ))}
      <TextBanner text='Recommendations' />
      {communities.length !== 0 &&
        communities.map((community) => (
          <CommunityCard community={community} key={community.name} handlePress={handlePress} />
        ))}
    </ScrollView>
  );
}
