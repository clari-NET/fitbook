import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import CommunityList from '../lists/CommunityList.js';

export default function Community () {

  // some function for 'onClick => navigateTo(Community)

  return (
    <View >
      <Text >Hello from Community page, this page will hold the list of available communities and also allow you to search for communities. maybe suggestions too. yayyy!</Text>
      <CommunityList communities={new Array(3).fill(0)}/>
    </View>
  )
}