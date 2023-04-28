import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Text, TextInput, Surface, Button,
} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

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
  datePicker: {
    marginHorizontal: 5,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default function EventForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    datetime: new Date(),
  });

  function handleCreate() {
    // NEED TO CONNECT TO THE DB
    // NEED TO CHANGE datetime to firestore timestamp format before POST
    console.log(formData);
  }

  function handleFormChange(event, value, item) {
    setFormData({
      ...formData,
      [item]: value,
    });
  }

  return (
    <Surface style={styles.surface}>
      <Text variant='titleLarge'>Create an Event</Text>
      <TextInput
        label='Event Title'
        mode='outlined'
        placeholder='e.g. "Run with Ronnie"'
        style={styles.textInput}
        value={formData.title}
        onChangeText={(value) => handleFormChange(null, value, 'title')}
      />
      <TextInput
        label='Event Description'
        mode='outlined'
        multiline
        placeholder='e.g. "Easy run in the Golden Gate Park"'
        style={styles.textInput}
        value={formData.description}
        onChangeText={(value) => handleFormChange(null, value, 'description')}
      />
      <View style={styles.datePicker}>
        <Text variant="labelLarge">Date:</Text>
        <DateTimePicker
          value={formData.datetime}
          onChange={(event, selectedDate) => handleFormChange(event, selectedDate, 'datetime')}
          mode='datetime'
          minimumDate={new Date()}
        />
      </View>
      <Button mode='contained' onPress={handleCreate}>Create</Button>
    </Surface>
  );
}
