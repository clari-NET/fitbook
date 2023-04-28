import React, { useState, useEffect } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import Modal from 'react-native-modal';
import Event from '../cards/Event';
import EventDetails from '../cards/EventDetails';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const styles = StyleSheet.create({
  carouselContainer: {
    height: 200,
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
        {events.length === 0 ? (
          <Text>
            No events to display. Check out the communities tab to get
            connected!
          </Text>
        ) : (
          <Carousel
            data={events}
            renderItem={({ item }) => (
              <Event event={item} handlePress={handlePress} />
            )}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            layout='stack'
            activeSlideOffset={10}
            contentContainerCustomStyle={{ marginVertical: 20 }}
          />
        )}
      </View>
      <Modal isVisible={modalIsVisible}>
        <EventDetails event={viewEvent} close={() => setIsVisible(false)} />
      </Modal>
    </>
  );
}
