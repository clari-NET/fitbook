import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { getDocs, collection, query } from 'firebase/firestore';
import db from '../../firebaseFiles/firebase.config';
import CommunityCard from '../cards/CommunityCard';
import TextBanner from '../utility/TextBanner';

const fakeDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...';

const communityFakeData = [
  {
    name: 'Community 1',
    description: fakeDescription,
    banner: 'https://picsum.photos/700',
    icon: 'U+1F6F9',
  },
  {
    name: 'Community 2',
    description: fakeDescription,
    banner: 'https://picsum.photos/700',
    icon: 'U+1F6F9',
  },
  {
    name: 'Community 3',
    description: fakeDescription,
    banner: 'https://picsum.photos/700',
    icon: 'U+1F6F9',
  },
];

async function getCommunities() {
  const q = query(collection(db, 'testCommunities'));
  const comDocs = await getDocs(q);
  // console.log(communities);
  const communities = comDocs.docs.map((doc) => doc.data);
  return communities;
}

export default function CommunityList({ navigation }) {
  const [text, setText] = useState('');
  const [communities, setCommunities] = useState([]);
  useEffect(() => {
    getCommunities()
      .then((coms) => {
        // setCommunities(coms);
        setCommunities(communityFakeData);
      })
      .catch((err) => console.error(err));
  }, []);

  function handlePress(community) {
    navigation.navigate('Community', { community });
  }

  function handleSearch(val) {
    setText(val);
    // TODO: search functionality
  }
  return (
    <ScrollView>
      <TextInput
        label='Search for a community'
        mode='outlined'
        value={text}
        onChangeText={(val) => handleSearch(val)}
      />
      <TextBanner text='Based on your search' />
      {communities.length !== 0 &&
        communities.map((community) => (
          <CommunityCard community={community} key={community.name} handlePress={handlePress} />
        ))}
      <TextBanner text='Recommendations' />
      {communities.length !== 0 &&
        communities.map((community) => (
          <CommunityCard community={community} key={community.name} />
        ))}
    </ScrollView>
  );
}
