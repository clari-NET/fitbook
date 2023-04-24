import React, {useState, useEffect} from 'react';
import { View, Text, Dimensions } from "react-native"
import Carousel from 'react-native-snap-carousel';
import Event from '../cards/Event.js';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

export default function EventList ({ events }) {

  return (
    <Carousel
      data={events}
      renderItem={Event}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
    />
    //   <Text >Hello from Events List!</Text>
    //   {new Array(3).fill(0).map(event => <Event event={event}/>)}
    // </View>
  )
}