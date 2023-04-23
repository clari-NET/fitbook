import React, {useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Event from '../cards/Event';
import Post from '../cards/Post';


export default function Home() {
  const [showEvent, setShowEvent] = useState(true);

  const toggleComponent = () => {
    setShowEvent(!showEvent);
  }
  return (
    <View style={styles.container}>
      <Text>Hello from Home!</Text>
      {showEvent ? <Event /> : <Post />}
      <Button
        title="Toggle Post/Event"
        onPress={toggleComponent}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
