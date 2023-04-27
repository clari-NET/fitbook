import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { TextInput, FAB, Modal } from 'react-native-paper';
import { docQuery } from '../../firebaseFiles/firebase.config';
import CommunityCard from '../cards/CommunityCard';
import TextBanner from '../utility/TextBanner';
import CommunityForm from '../forms/CommunityForm';

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    padding: 0,
    margin: 0,
    bottom: 25,
    right: 5,
    borderRadius: 10,
  },
  modal: {
    width: '80%',
    margin: 20,
    justifyContent: 'flex-end',
  },
});

export default function CommunityList({ navigation }) {
  const [searchVal, setSearchVal] = useState('');
  const [communities, setCommunities] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    docQuery('communities')
      .then((coms) => {
        setCommunities(coms);
        setFiltered(coms);
      })
      .catch((err) => console.error(err));
  }, []);

  function handleSearch(val) {
    setSearchVal(val);
    setFiltered(
      communities.filter((community) => (
        community.name.toLowerCase().includes(val.toLowerCase())
      )),
    );
  }

  function handlePress(community) {
    navigation.navigate('Community', { community });
  }

  function handleSubmit() {
    // POST request
    // upon success
    // close the modal
    setShowModal(false);
  }
  return (
    <>
      <ScrollView>
        <TextInput
          label='Search for a community'
          mode='outlined'
          value={searchVal}
          onChangeText={(val) => handleSearch(val)}
        />
        <TextBanner text='Based on your search' />
        {filtered.length !== 0 &&
          filtered.map((community) => (
            <CommunityCard
              community={community}
              key={community.name}
              handlePress={handlePress}
            />
          ))}
        <TextBanner text='Recommendations' />
        {communities.length !== 0 &&
          communities.map((community) => (
            <CommunityCard
              community={community}
              key={community.name}
              handlePress={handlePress}
            />
          ))}
      </ScrollView>
      <FAB icon='plus' style={styles.fab} onPress={() => setShowModal(true)} />
      <Modal
        visible={showModal}
        onDismiss={() => setShowModal(false)}
        style={styles.modal}
      >
        <CommunityForm handleSubmit={handleSubmit} />
      </Modal>
    </>
  );
}
