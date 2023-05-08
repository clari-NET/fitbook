import React, { useState } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  useWindowDimensions,
} from 'react-native';
import { FAB, Text, useTheme, Portal } from 'react-native-paper';
import uuid from 'react-native-uuid';
import { useSelector } from 'react-redux';
import { doc, setDoc } from 'firebase/firestore';
import db from '../../firebaseFiles/firebase.config';
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
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
  },
  modal: {
    height: 'auto',
    width: 'auto',
    backgroundColor: 'white',
    margin: 30,
    padding: 30,
    borderRadius: 30,
  },
});

// PLEASE KEEP DROPDOWN COMMENTED STUFF BECAUSE I'M ADDING IT BACK IN LATER
// const filterList = [
//   { value: 'hot', label: 'Hot' },
//   { value: 'top', label: 'Top' },
//   { value: 'now', label: 'Now' },
//   { value: 'thisWeek', label: 'This Week' },
//   { value: 'thisMonth', label: 'This Month' },
//   { value: 'thisYear', label: 'This Year' },
//   { value: 'allTime', label: 'All Time' },
// ];

export default function Feed({ posts, events, onPostSelected }) {
  const { colors } = useTheme();
  const [filter, setFilter] = useState('Recent');
  const [showDropDown, setShowDropDown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [postType, setPostType] = useState('');
  const user = useSelector((state) => state.user).data;

  async function handlePostSubmit(
    selectedCommunity,
    selectedCommunityName,
    postContent,
  ) {
    setShowModal(false);
    const newPost = {
      comments: [],
      community: {
        id: selectedCommunity,
        name: selectedCommunityName,
      },
      content: postContent,
      date: new Date().getTime(),
      id: uuid.v4(),
      lifts: 0,
      user: {
        name: `${user.name.first} ${user.name.last}`,
        profilePhoto: user.profile_photo,
        user_id: user.id,
        username: user.username,
      },
    };

    try {
      const documentRef = doc(db, 'posts', newPost.id.toString());
      await setDoc(documentRef, newPost);
    } catch (error) {
      console.error('Error posting your post:', error);
    }
  }

  function handleEventSubmit() {
    setShowModal(false);
  }

  // function handleDropDownChange(value) {
  //   // TODO: change this to use a fresh query, pass down query lists instead of posts/events
  //   const newPosts = [...posts].sort((a, b) => a.lifts - b.lifts);
  //   setSorted(newPosts);
  //   setFilter(value);
  // }
  // console.log('inside feed', posts);
  return (
    <>
      {posts.length === 0 ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 50,
          }}
        >
          <Text variant='displaySmall' style={{ textAlign: 'center' }}>
            It's quiet in here... Check out the communities tab to start
            connecting!
          </Text>
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
                {/* <DropDown {*PLEASE KEEP THESE COMMENTS FOR NOW*}
                  label={filter}
                  mode='outlined'
                  list={filterList}
                  value={filter}
                  setValue={handleDropDownChange}
                  visible={showDropDown}
                  showDropDown={() => setShowDropDown(true)}
                  onDismiss={() => setShowDropDown(false)}
                /> */}
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
      <Modal visible={showModal} transparent animationType='none'>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalBackdrop}
        >
          <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View
                  style={styles.modal}
                >
                  {postType === 'post' && (
                    <PostForm
                      handleSubmit={handlePostSubmit}
                      communities={user.communities}
                      onPostSelected={onPostSelected}
                    />
                  )}
                  {postType === 'event' && (
                    <EventForm
                      handleSubmit={handleEventSubmit}
                      open={setShowModal}
                    />
                  )}
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
}
