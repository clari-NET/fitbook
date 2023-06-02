import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Text, TextInput, Button, Surface,
} from 'react-native-paper';

const styles = StyleSheet.create({
  surface: {
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: 'white',
  },
  textInput: {
    marginHorizontal: 10,
    marginBottom: 5,
  },
});

export default function StatForm({ handleSubmit }) {
  const [userStat, setUserStat] = useState({
    category: '',
    field: '',
    record: '',
  });

  function handleFormSubmit() {
    if (userStat.category && userStat.field && userStat.record) {
      handleSubmit(userStat);
    }
  }

  return (
    <Surface style={styles.surface}>
      <Text variant='titleLarge'>Add a Fitness Stat</Text>
      <TextInput
        label='Fitness Stat Category'
        value={userStat.category}
        onChangeText={(text) => setUserStat((prev) => ({ ...prev, category: text }))}
        mode='outlined'
        placeholder='e.g. "Bench Press", "Basketball'
        style={styles.textInput}
      />
      <TextInput
        label='Fitness Stat Field'
        value={userStat.field}
        onChangeText={(text) => setUserStat((prev) => ({ ...prev, field: text }))}
        mode='outlined'
        multiline
        placeholder='e.g. "Max rep", "2-mile time"'
        style={styles.textInput}
      />
      <TextInput
        label='Fitness Stat Record'
        value={userStat.record}
        onChangeText={(text) => setUserStat((prev) => ({ ...prev, record: text }))}
        mode='outlined'
        multiline
        placeholder='e.g. "150 lbs", "14 minutes"'
        style={styles.textInput}
      />
      <Button mode='contained' onPress={handleFormSubmit}>Add!</Button>
    </Surface>
  );
}
