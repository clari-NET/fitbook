import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from "react-native"
import Carousel from 'react-native-snap-carousel';
import Event from '../cards/Event.js';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

export default function EventList({ events }) {
  return (
    <Carousel
      data={events}
      renderItem={Event}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
      layout='stack'
      activeSlideOffset={10}
      contentContainerCustomStyle={{ marginVertical: 20 }}
    />
  );
}
