import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { FAB, Modal, Text, useTheme } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import Post from '../cards/Post';
import EventList from '../lists/EventList';
import PostForm from '../forms/PostForm';
import EventForm from '../forms/EventForm';

const styles = StyleSheet.create({
  fab: {
    padding: 0,
    bottom: -35,
    right: 0,
    borderRadius: 30,
    backgroundColor: '#FF6000',
    textColor: '#FFF',
  },
  fabGroup: {
    color: '#FFF',
  },
  modal: {
    width: '80%',
    margin: 20,
    justifyContent: 'flex-end',
  },
});

const filterList = [
  { value: 'hot', label: 'Hot' },
  { value: 'top', label: 'Top' },
  { value: 'now', label: 'Now' },
  { value: 'thisWeek', label: 'This Week' },
  { value: 'thisMonth', label: 'This Month' },
  { value: 'thisYear', label: 'This Year' },
  { value: 'allTime', label: 'All Time' },
];

export default function Feed({ posts, events, onPostSelected }) {
  const { colors } = useTheme();
  const [filter, setFilter] = useState('Recent');
  const [showDropDown, setShowDropDown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [postType, setPostType] = useState('');

  function handlePostSubmit() {
    setShowModal(false);
  }

  function handleEventSubmit() {
    setShowModal(false);
  }
  // console.log('inside feed', posts);
  return (
    <>
      {posts.length === 0 ? (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 50 }}
        >
          <Text variant='displaySmall' style={{textAlign: 'center'}}>It's quiet in here... Check out the communities tab to start connecting!</Text>
        </View>
      ) : (
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <Post post={item} onPress={onPostSelected} />
          )}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={
            events.length !== 0 && (
              <>
                <EventList events={events} />
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
              </>
            )
          }
        />
      )}
      <FAB.Group
        open={open}
        visible
        icon={open ? 'arrow-up' : 'plus'}
        fabStyle={styles.fab}
        style={styles.fabGroup}
        actions={[
          {
            icon: 'chat',
            color: colors.secondary,
            label: 'Post',
            style: { marginBottom: -5 },
            labelStyle: { marginBottom: -5 },
            onPress: () => {
              setPostType('post');
              setShowModal(true);
            },
          },
          {
            icon: 'calendar-today',
            color: colors.secondary,
            backgroundColor: 'black',
            label: 'Event',
            style: { marginBottom: -25 },
            labelStyle: { marginBottom: -25 },
            onPress: () => {
              setPostType('event');
              setShowModal(true);
            },
          },
        ]}
        onStateChange={() => setOpen(!open)}
      />
      <Modal
        visible={showModal}
        onDismiss={() => setShowModal(false)}
        style={styles.modal}
      >
        {postType === 'post' && <PostForm handleSubmit={handlePostSubmit} />}
        {postType === 'event' && <EventForm handleSubmit={handleEventSubmit} />}
      </Modal>
    </>
  );
}
