import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDown from 'react-native-paper-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Timestamp } from 'firebase/firestore';
import { docQuery } from '../../firebaseFiles/firebase.config';
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
    alignItems: 'center',
  },
});

console.log(Timestamp);

export default function EventForm() {
  const { data } = useSelector((state) => state.user);
  const [calendarDate, setCalendarDate] = useState(new Date());
  const firebaseDate = Timestamp.fromDate(calendarDate);
  const [showDropDown, setShowDropDown] = useState(false);
  const [filter, setFilter] = useState('-');
  const [filterList, setFilterList] = useState([]);
  const [currentComs, setCurrentComs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: firebaseDate,
    user: { name: `${data.name.first} ${data.name.last}`, user_id: data.id },
    id: '',
    lifts: 0,
    comments: [],
    community: { id: '', name: '' },
    content: '',
  });

  useEffect(() => {
    docQuery('communities')
      .then((coms) => {
        setCurrentComs(coms);
        return coms.map((com) => (
          { value: com.name, label: com.name }));
      }).then((currComs) => {
        setFilterList(currComs);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    currentComs.forEach((com) => {
      if (com.name === filter) {
        const selectedCom = { id: com.id, name: com.name };
        setFormData({ ...formData, community: selectedCom });
      }
    });
  }, [filter]);

  function handleCreate() {
    // NEED TO CONNECT TO THE DB

    console.log(formData);
  }

  function handleFormChange(event, value, item) {
    setFormData({
      ...formData,
      [item]: value,
    });
  }

  function handleDateChange(event) {
    setCalendarDate(new Date(event.target.value));
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
      <DropDown
        label={filter}
        mode='outlined'
        list={filterList}
        value={filter}
        setValue={setFilter}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
      />
      <View style={styles.datePicker}>
        <Text variant="labelLarge">Date:</Text>
        <DateTimePicker
          value={calendarDate}
          onChange={(event) => handleDateChange(event)}
          mode='datetime'
          minimumDate={new Date()}
        />
      </View>
      <Button mode='contained' onPress={handleCreate}>Create</Button>
    </Surface>
  );
}
