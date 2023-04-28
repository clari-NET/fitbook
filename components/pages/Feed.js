import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { FAB, Modal, Text } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import Post from '../cards/Post';
import EventList from '../lists/EventList';
import PostForm from '../forms/PostForm';
import EventForm from '../forms/EventForm';

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    padding: 0,
    margin: 0,
    bottom: -35,
    right: -5,
    borderRadius: 30,
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
  const [filter, setFilter] = useState('Recent');
  const [sorted, setSorted] = useState(posts);
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

  function handleDropDownChange(value) {
    // TODO: change this to use a fresh query, pass down query lists instead of posts/events
    const newPosts = [...posts].sort((a, b) => a.lifts - b.lifts);
    setSorted(newPosts);
    setFilter(value);
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
                  setValue={handleDropDownChange}
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
        style={styles.fab}
        actions={[
          {
            icon: 'chat',
            label: 'Post',
            onPress: () => {
              setPostType('post');
              setShowModal(true);
            },
          },
          {
            icon: 'calendar-today',
            label: 'Event',
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
