import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDown from 'react-native-paper-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Timestamp, collection } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { docQuery } from '../../firebaseFiles/firebase.config';
import {
  Text, TextInput, Surface, Button,
} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import db from '../../firebaseFiles/firebase.config';
import uuid from 'react-native-uuid';

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

export default function EventForm() {
  const data = useSelector((state) => state.user).data;
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
    members: [],
    community: { id: '', name: '' },
    content: '',
    location: '',
  });

  const getCommunities = async () => {
    try {
      const { communities } = data;
      const comsRef = collection(db, 'communities');
      const q = query(comsRef, where('id', 'in', communities));
      const allComs = await getDocs(q);
      const comsArr = [];
      allComs.forEach((doc) => {
        comsArr.push(doc.data());
      });
      if (comsArr.length > 0) {
        setCurrentComs(comsArr);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCommunities();
  }, []);

  useEffect(() => {
    const filtered = currentComs.map((com) => (
      { value: com.name, label: com.name }
    ));

    setFilterList(filtered);
  }, [currentComs]);

  useEffect(() => {
    currentComs.forEach((com) => {
      if (com.name === filter) {
        const selectedCom = { id: com.id, name: com.name };
        setFormData({ ...formData, community: selectedCom });
      }
    });
  }, [filter]);

  const handleCreate = async () => {
    // NEED TO CONNECT TO THE DB
    await setDoc(doc(db, 'events', uuid.v4()), {
      ...formData,
      id: uuid.v4(),
      image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      name: formData.title,
      date_time: formData.date,
    });

    console.log(JSON.stringify(formData), '..........');
  }

  function handleFormChange(value, item) {
    setFormData({
      ...formData,
      [item]: value,
    });
  }

  function handleDateChange(event, dateInput) {
    setCalendarDate(dateInput);
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
        onChangeText={(value) => handleFormChange(value, 'title')}
      />
      <TextInput
        label='Event Description'
        mode='outlined'
        multiline
        placeholder='e.g. "Easy run in the Golden Gate Park"'
        style={styles.textInput}
        value={formData.description}
        onChangeText={(value) => handleFormChange(value, 'description')}
      />
      <TextInput
        label='Location (City, State)'
        mode='outlined'
        multiline
        placeholder='e.g. "Miami, FL"'
        style={styles.textInput}
        value={formData.location}
        onChangeText={(value) => handleFormChange(value, 'location')}
      />
      <DropDown
        label='Community'
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
          onChange={(event, selectedDate) => handleDateChange(event, selectedDate)}
          mode='datetime'
          minimumDate={new Date()}
        />
      </View>
      <Button mode='contained' onPress={handleCreate}>Create</Button>
    </Surface>
  );
}
