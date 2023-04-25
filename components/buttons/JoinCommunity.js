import React, {useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';

export default function JoinCommunity() {
  const joinCommunity = (e) => {
    console.log(e.target.value);
  };

  return (
    <Button title="Join" onPress={joinCommunity} />
  );
}
