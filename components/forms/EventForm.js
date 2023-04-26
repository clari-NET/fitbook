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

export default function PostForm({handleSubmit}) {
  return (
    <Surface style={styles.surface}>
      <Text variant='titleLarge'>Create an Event</Text>
      <TextInput
        label='Event Title'
        mode='outlined'
        placeholder='e.g. "Glutes wit da Homiez"'
        style={styles.textInput}
      />
      <TextInput
        label='Event Description'
        mode='outlined'
        multiline
        placeholder='Say more, my G'
        style={styles.textInput}
      />
      <Button mode='contained' onPress={handleSubmit}>Post!</Button>
    </Surface>
  );
}
