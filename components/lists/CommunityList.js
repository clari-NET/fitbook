import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { TextInput, FAB, Modal } from 'react-native-paper';
import { getDocs, collection, query } from 'firebase/firestore';
import db from '../../firebaseFiles/firebase.config';
import CommunityCard from '../cards/CommunityCard';
import TextBanner from '../utility/TextBanner';
import CommunityForm from '../forms/CommunityForm';

const fakeDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...';

// const communityFakeData = [
//   {
//     name: 'Community 1',
//     description: fakeDescription,
//     banner: 'https://picsum.photos/700',
//     icon: 'U+1F6F9',
//   },
//   {
//     name: 'Community 2',
//     description: fakeDescription,
//     banner: 'https://picsum.photos/700',
//     icon: 'U+1F6F9',
//   },
//   {
//     name: 'Community 3',
//     description: fakeDescription,
//     banner: 'https://picsum.photos/700',
//     icon: 'U+1F6F9',
//   },
// ];

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

async function getCommunities() {
  const q = query(collection(db, 'communities'));
  const comDocs = await getDocs(q);
  const communities = comDocs.docs.map((doc) => doc.data());
  return communities;
}

export default function CommunityList({ navigation }) {
  const [searchVal, setSearchVal] = useState('');
  const [communities, setCommunities] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    getCommunities(searchVal)
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
    // commented out the function for now since navigation prop is not passed
    // and throws an error
    // console.log('Navigate to Community X')
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
          <CommunityCard community={community} key={community.name} handlePress={handlePress} />
        ))}

{/* add a community */}

      </ScrollView>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => setShowModal(true)}
      />
      <Modal
        visible={showModal}
        onDismiss={() => setShowModal(false)}
        style={styles.modal}
      >
        {<CommunityForm handleSubmit={handleSubmit} />}
      </Modal>
    </>
  );
}


