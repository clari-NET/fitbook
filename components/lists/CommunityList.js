import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Community from '../pages/Community.js';
import CommunityCard from '../cards/CommunityCard.js';

export default function CommunityList ({ communities }) {

  // some function for 'onClick => navigateTo(Community)

  return (
    <View >
      <Text >Hello from Communities List!</Text>
      {communities.map(community => <CommunityCard community={community}/>)}
    </View>
  )
}

