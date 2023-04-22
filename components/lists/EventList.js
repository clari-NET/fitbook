import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Event from '../cards/Event.js';

export default function EventList ({ events }) {

  return (
    <View >
      <Text >Hello from Events List!</Text>
      {new Array(3).fill(0).map(event => <Event event={event}/>)}
    </View>
  )
}