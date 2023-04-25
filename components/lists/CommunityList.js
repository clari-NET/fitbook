import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import CommunityCard from '../cards/CommunityCard';
import TextBanner from '../utility/TextBanner';

export default function CommunityList({ communities }) {
  const [text, setText] = useState('');
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
      <TextBanner text='Recommendations' />
      {/* {communities.map((community) => (
        <CommunityCard key={community.id} community={community} />
      ))} */}
    </View>
  );
}
