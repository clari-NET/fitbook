import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Modal from 'react-native-modal';
import { getDocs, collection, query, where } from 'firebase/firestore';
import db from '../../firebaseFiles/firebase.config';
import Event from '../cards/Event';
import EventDetails from '../cards/EventDetails';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

// no event data exists yet, so just leaving this here for now so it's ready to be used.
async function getEvents() {
  const q = query(collection(db, 'testEvents'));
  const eventDocs = await getDocs(q);
  const events = eventDocs.docs.map((doc) => doc.data());
  return events;
}

export default function EventList({ events }) {
  const [modalIsVisible, setIsVisible] = useState(false);
  const [viewEvent, setViewEvent] = useState({});
  function handlePress(event) {
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
      <Modal isVisible={modalIsVisible}>
        <EventDetails event={viewEvent} close={() => setIsVisible(false)} />
      </Modal>
    </>
  );
}
