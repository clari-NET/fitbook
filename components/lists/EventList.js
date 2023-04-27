import React, { useState } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Modal from 'react-native-modal';
import { docQuery } from '../../firebaseFiles/firebase.config';
import Event from '../cards/Event';
import EventDetails from '../cards/EventDetails';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const styles = StyleSheet.create({
  carouselContainer: {
    height: 200, // You can adjust this value according to your design requirements
  },
});

export default function EventList({ events }) {
  const [modalIsVisible, setIsVisible] = useState(false);
  const [viewEvent, setViewEvent] = useState({});

  function handlePress(event) {
    setViewEvent(event);
    setIsVisible(true);
  }

  return (
    <>
      <View style={styles.carouselContainer}>
        <Carousel
          data={events}
          renderItem={() => <Event handlePress={handlePress} />}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          layout='stack'
          activeSlideOffset={10}
          contentContainerCustomStyle={{ marginVertical: 20 }}
        />
      </View>
      <Modal isVisible={modalIsVisible}>
        <EventDetails event={viewEvent} close={() => setIsVisible(false)} />
      </Modal>
    </>
  );
}
