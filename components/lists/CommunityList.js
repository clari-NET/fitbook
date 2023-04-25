import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
// import Community from '../pages/Community.js';
import CommunityCard from '../cards/CommunityCard';

export default function CommunityList({ communities }) {
  return (
    <View>
      <Text>Hello from Communities List!</Text>
      {new Array(3).fill(0).map((community, index) => <CommunityCard community={community} key={index} />)}
    </View>
  );
}
