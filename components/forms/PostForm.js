import React from 'react';
import { TextInput } from 'react-native-paper';

export default function PostForm() {
  return (
    <TextInput
      label="Message"
      mode="outlined"
      multiline
      style={{ marginBottom: 10 }}
      placeholder="Speak to your people..."
    />
  );
}
