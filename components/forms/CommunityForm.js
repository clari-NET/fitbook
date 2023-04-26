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

export default function CommunityForm({handleSubmit}) {
  return (
    <Surface style={styles.surface}>
      <Text variant='titleLarge'>Create a Community</Text>
      <TextInput
        label='Community Name'
        mode='outlined'
        placeholder='e.g. "Glutes wit da Homiez"'
        style={styles.textInput}
      />
      <TextInput
        label='Community Description'
        mode='outlined'
        multiline
        placeholder='Say more, my G'
        style={styles.textInput}
      />
      <Button mode='contained' onPress={handleSubmit}>Create</Button>
    </Surface>
  );
}

// name: String
// banner: String (url)
// icon
// admins: [user_reference,...]
// categories
// Location
// Members: [user_reference,...]
