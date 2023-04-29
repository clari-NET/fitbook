import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import {
  useTheme, Avatar, Text, IconButton, ActivityIndicator, Modal,
} from 'react-native-paper';
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useSelector } from 'react-redux';
import db from '../../firebaseFiles/firebase.config';
import StatList from '../lists/StatList';
import StatForm from '../forms/StatForm';

export default function ProfileTab({ user, refresh }) {
  const { colors } = useTheme();
  const [userData, setUserData] = useState({});
  const [visible, setVisible] = useState(false);

  const selfData = useSelector((state) => state.user.data);
  const userSelf = selfData.username === user.username;

  useEffect(() => {
    // if it's themselves
    if (userSelf) {
      setUserData(selfData);
    } else {
      setUserData(user);
    }
  }, []);

  function addFriend(id) {
    const targetRef = doc(db, 'users', String(id));
    const myRef = doc(db, 'users', getAuth().currentUser.uid);
    Promise.all([updateDoc(myRef, { friends: arrayUnion(id) }),
      updateDoc(targetRef, { friends: arrayUnion(selfData.id) })])
      .then(() => 'Success')
      .then(() => refresh())
      .catch((err) => console.log(err));
  }

  function unfriend(id) {
    const targetRef = doc(db, 'users', String(id));
    const myRef = doc(db, 'users', getAuth().currentUser.uid);
    Promise.all([updateDoc(myRef, { friends: arrayRemove(id) }),
      updateDoc(targetRef, { friends: arrayRemove(selfData.id) })])
      .then(() => 'Success')
      .then(() => refresh())
      .catch((err) => console.log(err));
  }

  function handleSubmit(stat) {
    const userRef = doc(db, 'users', userData.id);
    if (userData.stats) {
      updateDoc(userRef, { stats: arrayUnion(stat) })
        .then(() => refresh())
        .catch((e) => console.error('error submitting new stat', e));
    } else {
      updateDoc(userRef, { stats: [stat] });
    }
  }

  return (
    !userData.username ? (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating color={colors.primary} />
      </View>
    ) : (
      <>
        <ScrollView>
          <View style={[styles.header]}>
            <Avatar.Image size={150} source={{ uri: userData.profile_photo }} />
          </View>
          <View style={[styles.body]}>
            <Text variant="headlineMedium">{userData.username}</Text>
            {!userSelf && (userData.friends.includes(selfData.id)
              ? <IconButton icon="account-minus" size={40} iconColor={colors.primary} onPress={() => unfriend(userData.id)} />
              : <IconButton icon="account-plus" size={40} iconColor={colors.primary} onPress={() => addFriend(userData.id)} />)}
          </View>
          <View style={[styles.username]}>
            <Text variant="headlineMedium">
              {`${userData.name.first} ${userData.name.last}`}
            </Text>
            {userSelf && <IconButton icon="numeric-9-plus-circle" size={40} iconColor={colors.primary} onPress={() => setVisible(true)} />}
          </View>
          <StatList stats={userData.stats} />
        </ScrollView>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          style={styles.modal}
        >
          <StatForm handleSubmit={handleSubmit} />
        </Modal>
      </>
    )
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 120,
    margin: 20,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  username: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  modal: {
    // width: '80%',
    margin: 20,
    // backgroundColor: 'white',
  },
});
