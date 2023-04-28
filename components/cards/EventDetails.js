import React, { useState, useEffect } from 'react';
import { Card, Button, Text } from 'react-native-paper';
import { doc, getDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import db from '../../firebaseFiles/firebase.config';

export default function Event({ event, close }) {
  const [attending, setAttending] = useState(false);
  const user = useSelector((state) => state.user).data;

  function getAttending() {
    if (event.id) {
      getDoc(doc(db, 'events', event.id))
        .then((e) => {
          const members = e.data().members
          const attendingTF = members.filter((member) => member.user_id === user.id).length === 1;
          console.log(attendingTF);
          setAttending(attendingTF);
        })
        .catch(console.error);
    }
  }

  function updateAttending(status) {
    if (event.id) {
      updateDoc(doc(db, 'events', event.id))
        .then((doc) => {
          const attendingTF = doc.data().members.includes(user.id);
          console.log(attendingTF);
        })
        .catch(console.error);
    }
  }

  useEffect(() => {
    getAttending();
  }, [event]);

  function handleAttending() {
    updateAttending(true);
    close();
  }

  function handleNotAttending() {
    updateAttending(false);
    close();
  }

  return (
    <Card>
      <Card.Cover
        style={{ width: '100%' }}
        source={{ uri: 'https://picsum.photos/700' }}
      />
      <Card.Content>
        <Text variant='titleSmall'>{event.name || 'untitled event'}</Text>
        <Text variant='titleSmall'>{event.location || 'any place'}</Text>
        <Text variant='bodySmall'>
          {event.date_time.date || 'any day'}
          {event.date_time.time || 'any time'}
        </Text>
        <Text variant='titleSmall'>Event Description:</Text>
        <Text variant='bodySmall'>
          {event.description || 'no description given'}
        </Text>
        <Text>
          Attending:
          {attending}
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={handleAttending}>Attending</Button>
        <Button onPress={handleNotAttending}>Not Attending</Button>
      </Card.Actions>
    </Card>
  );
}
