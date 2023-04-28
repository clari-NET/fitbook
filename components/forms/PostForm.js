import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextInput, Surface, Button } from 'react-native-paper';

const styles = StyleSheet.create({
  surface: {
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  textInput: {
    marginHorizontal: 10,
    marginBottom: 5,
  },
});

export default function PostForm({ handleSubmit }) {
  return (
    <Surface style={styles.surface}>
      <Text variant='titleLarge'>Create an Event</Text>
      <TextInput
        label='Say something'
        mode='outlined'
        multiline
        placeholder='Speak to your people...'
        style={styles.textInput}
      />
      <Button mode='contained' onPress={handleSubmit}>Post!</Button>
    </Surface>
  );
}
