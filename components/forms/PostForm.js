import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {
  Text,
  TextInput,
  Surface,
  Button,
} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import { docQuery } from '../../firebaseFiles/firebase.config';

const styles = StyleSheet.create({
  surface: {
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  textInput: {
    marginHorizontal: 10,
    marginBottom: 10,
    height: 150,
  },
});

export default function PostForm({ handleSubmit, communities }) {
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [selectedCommunityName, setSelectedCommunityName] = useState('');
  const [postContent, setPostContent] = useState('');
  const [communityDropdownOptions, setCommunityDropdownOptions] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    async function fetchCommunityNames() {
      const communityConditions = communities.map((id) => ['id', '==', id]);
      const communityNames = await docQuery('communities', communityConditions);
      setCommunityDropdownOptions(communityNames.map((community) => (
        { label: community.name, value: community.id }
      )));
    }

    fetchCommunityNames();
  }, [communities]);

  const handleCommunitySelect = (value, label) => {
    setSelectedCommunity(value);
    setSelectedCommunityName(label);
    console.log('SelectedCommunity: ', selectedCommunity);
    console.log('SelectedCommunityName: ', selectedCommunityName);
  };

  return (
    <Surface style={styles.surface}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>Create a Post</Text>
      <DropDown
        label='Select a community'
        mode='outlined'
        value={selectedCommunity}
        setValue={handleCommunitySelect}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        list={communityDropdownOptions}
        style={styles.dropdown}
      />
      <TextInput
        label='Say something'
        mode='outlined'
        multiline
        placeholder='Speak to your people...'
        style={styles.textInput}
        value={postContent}
        onChangeText={(text) => setPostContent(text)}
      />
      <Button mode='contained' onPress={() => handleSubmit(selectedCommunity, selectedCommunityName, postContent)}>Post!</Button>
    </Surface>
  );
}
