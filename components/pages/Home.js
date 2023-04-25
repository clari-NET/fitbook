import React, {useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Event from '../cards/Event';
import EventList from '../lists/EventList';
import Post from '../cards/Post';
import { useTheme } from 'react-native-paper';


export default function Home({ theme }) {
  const [showEvent, setShowEvent] = useState(true);
  const { colors } = useTheme();

  const toggleComponent = () => {
    setShowEvent(!showEvent);
  }
  return (
    <ScrollView >
      <Text>Hello from Home!</Text>
      {showEvent ? <EventList events={new Array(5).fill(0)}/> : <Post />}
      <Button
        title="Toggle Post/Event"
        onPress={toggleComponent}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
