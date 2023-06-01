import React, { useState, useEffect, useRef } from 'react';
import { Platform, StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import {
  Text,
  TextInput,
  Surface,
  Button,
  Portal,
} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import { docOrQuery } from '../../firebaseFiles/firebase.config';

const styles = StyleSheet.create({
  surface: {
    height: '100%',
    width: '100%',
    padding: 30,
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // borderBottomLeftRadius: 30,
    // backgroundColor: '#fff',
    // elevation: 4,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.27,
    // shadowRadius: 4.65,
  },
  textInput: {
    marginBottom: 10,
    height: 100,
    width: 'auto',
    // margin: 20,
    // width: 200,
    // width: '100%',
  },
  textInputTitle: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  dropdown: {
    // flex: 1,
    width: '100%',
    zIndex: 100,
  },
});

export default function PostForm({ handleSubmit, communities, onPostSelected }) {
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [selectedCommunityName, setSelectedCommunityName] = useState('');
  const [postContent, setPostContent] = useState('');
  const [communityDropdownOptions, setCommunityDropdownOptions] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const communityNameSearch = useRef({});

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

  const handleCommunitySelect = (id) => {
    setSelectedCommunity(id); // id
    setSelectedCommunityName(communityNameSearch.current[String(id)]);
  };

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
        // <View style={{zIndex: 1}}>
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
          dropdownStyle={styles.dropdown}
        />
        // </View>
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
        onPress={() => handleSubmit(selectedCommunity, selectedCommunityName, postContent)}
      >
        Post!
      </Button>
    </>
  );
}
