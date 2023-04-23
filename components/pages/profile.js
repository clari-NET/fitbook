import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

export default function Profile () {


  return (
    <View >
      <Text >Hello from Profile page! This is where you'll see your profile or that of another user, depending on how you got here. we love props!</Text>
      <CommunityList communities={new Array(3).fill(0)}/>
    </View>
  )
}