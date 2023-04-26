import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { getDocs, collection, query, where } from 'firebase/firestore';
import db from '../../firebaseFiles/firebase.config';
import CommunityCard from '../cards/CommunityCard';
import TextBanner from '../utility/TextBanner';

async function getCommunities(searchVal) {
  const q = query(collection(db, 'testCommunities'));
  const comDocs = await getDocs(q);
  // console.log(communities);
  const communities = comDocs.docs.map((doc) => doc.data);
  return communities;
}

export default function CommunityList() {
  const [text, setText] = useState('');
  const [communities, setCommunities] = useState([]);
  useEffect(() => {
    getCommunities()
      .then((coms) => {
        setCommunities(coms);
        console.log('is this it?');
      })
      .catch((err) => console.log('or is it err?'));
  }, []);

  function handleSearch(val) {
    setText(val);
    // TODO: search functionality
  }
  return (
    <View>
      <TextInput
        label='Search for a community'
        mode='outlined'
        value={text}
        onChangeText={(val) => handleSearch(val)}
      />
      <TextBanner text='Based on your search' />
      {/* {communities.length !== 0 &&
        communities.map((community) => <Text>{community.name}</Text>)} */}
      <TextBanner text='Recommendations' />
      {/* {communities.map((community) => (
        <CommunityCard key={community.id} community={community} />
      ))} */}
    </View>
  );
}
