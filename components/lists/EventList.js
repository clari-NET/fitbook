import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, Alert } from "react-native"
import Carousel from 'react-native-snap-carousel';
import Event from '../cards/Event.js';
import EventDetails from '../cards/EventDetails.js';
import Modal from "react-native-modal";

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

export default function EventList({ events }) {
  const [modalIsVisible, setIsVisible] = useState(false);
  const [viewEvent, setViewEvent] = useState({});
  function handlePress(event) {
    // Alert.alert('You pressed it!', 'Alert msg');
    setViewEvent(event);
    setIsVisible(true);
  }
  return (
    <>
      <Carousel
        data={events}
        renderItem={() => <Event handlePress={handlePress} />}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        layout='stack'
        activeSlideOffset={10}
        contentContainerCustomStyle={{ marginVertical: 20 }}
      />
      <Modal
        isVisible={modalIsVisible}
      >
        <EventDetails event={viewEvent} close={() => setIsVisible(false)} />
      </Modal>
    </>
  );
}

//{(props) => Event({...props, handlePress})}