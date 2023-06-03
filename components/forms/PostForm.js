import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import {
  Text,
  TextInput,
  Button,
  useTheme,
} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { docOrQuery } from '../../firebaseFiles/firebase.config';

const styles = StyleSheet.create({
  surface: {
    height: '100%',
    width: '100%',
    padding: 30,
  },
  textInput: {
    marginBottom: 10,
    height: 100,
    width: 'auto',
  },
  textInputTitle: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default function PostForm({ handleSubmit, communities, onPostSelected }) {
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [postContent, setPostContent] = useState('');
  const [communityDropdownOptions, setCommunityDropdownOptions] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const communityNameSearch = useRef({});
  const { colors } = useTheme();

  async function fetchCommunityNames() {
    try {
      const communityConditions = communities.map((id) => ['id', '==', id]);
      const communityNames = await docOrQuery(
        'communities',
        communityConditions,
      );
      setCommunityDropdownOptions(
        communityNames.map(({ name, id }) => {
          communityNameSearch.current = {
            ...communityNameSearch.current,
            [id]: name,
          };
          return { label: name, value: id };
        }),
      );
      setIsLoading(false);
      setIsError(false);
    } catch {
      setIsLoading(false);
      setIsError(true);
    }
  }

  useEffect(() => {
    if (onPostSelected === undefined) {
      fetchCommunityNames();
    } else {
      setIsLoading(false);
      setIsError(false);
    }
  }, [communities]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error has occured</Text>;
  }

  return (
    <>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
        Create a Post
      </Text>
      {onPostSelected === undefined ? (
        <DropDownPicker
          placeholder='Select a community'
          value={selectedCommunity}
          setValue={setSelectedCommunity}
          setItems={setCommunityDropdownOptions}
          open={showDropDown}
          setOpen={setShowDropDown}
          items={communityDropdownOptions}
          style={{
            backgroundColor: colors.background,
            borderColor: colors.onSurfaceVariant,
            width: '100%',
            borderRadius: 0,
          }}
          dropDownContainerStyle={{
            backgroundColor: colors.background,
            borderColor: colors.onSurfaceVariant,
            borderRadius: 0,
          }}
          placeholderStyle={{
            color: colors.onSurfaceVariant,
            fontSize: 16,
          }}
          textStyle={{
            color: colors.onSurfaceVariant,
            fontSize: 16,
          }}
        />
      ) : (
        <TextInput
          label='Community Name'
          mode='outlined'
          style={styles.textInputTitle}
          value={onPostSelected.name}
          editable={false}
        />
      )}
      <TextInput
        label='Say something'
        mode='outlined'
        multiline
        placeholder='Speak to your people...'
        style={styles.textInput}
        value={postContent}
        onChangeText={(text) => setPostContent(text)}
      />
      <Button
        mode='contained'
        onPress={() => handleSubmit(
          selectedCommunity,
          communityNameSearch.current[String(selectedCommunity)],
          postContent,
        )}
      >
        Post!
      </Button>
    </>
  );
}
