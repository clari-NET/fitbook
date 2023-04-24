import React, {useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Event from '../cards/Event';
import Post from '../cards/Post';
import { useTheme } from 'react-native-paper';


export default function Home({ theme }) {
  const [showEvent, setShowEvent] = useState(true);
  const { colors } = useTheme();

  const toggleComponent = () => {
    setShowEvent(!showEvent);
  }
  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
