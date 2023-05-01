import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  useTheme, Text, Switch, Avatar, Button, IconButton, ActivityIndicator, Modal,
} from 'react-native-paper';
import { getAuth } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import * as SecureStore from 'expo-secure-store';
import { toggle } from '../../redux/theme/themeSlice';
import { docQuery } from '../../firebaseFiles/firebase.config';
import { userStatus } from '../../redux/user/userSlice';
import PhotoForm from '../forms/PhotoForm';
import Loading from '../cards/Loading';

const auth = getAuth();

export default function ProfileSettings({ user }) {
  const theme = useTheme();
  const { dark } = useSelector((state) => state.theme);
  const [userData, setUserData] = useState({});
  const [changePhoto, setChangePhoto] = useState(false);
  const dispatch = useDispatch();

  async function deleteStore(key) {
    await SecureStore.deleteItemAsync(key);
  }

  useEffect(() => {
    if (user) {
      setUserData(user);
    } else {
      // console.log(auth.currentUser.uid);
      docQuery('users', [['id', '==', auth.currentUser.uid]])
        .then((res) => {
          setUserData(res[0]);
        });
    }
  }, []);
  // const userInfo = get
  return (
    !userData.username ? <Loading /> : (
      <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
        <View style={[styles.header]}>
          <Avatar.Image size={150} source={{ uri: userData.profile_photo }} />
          <IconButton
            icon="plus-circle"
            iconColor={theme.colors.primary}
            size={40}
            style={{
              position: 'absolute', marginTop: -5, marginLeft: 115, backgroundColor: 'transparent',
            }}
            onPress={() => setChangePhoto(true)}
          />
        </View>
        <View style={[styles.body]}>
          <Text variant="headlineMedium">{userData.username}</Text>
          <Text variant="headlineMedium">
            {`${userData.name.first} ${userData.name.last}`}
          </Text>
          <View style={[styles.setting]}>
            <Text variant="headlineMedium">Light/Dark Mode:</Text>
            <Switch
              color={theme?.colors.primary}
              value={dark}
              onValueChange={() => dispatch(toggle())}
            />
          </View>
          <View style={[styles.body]}>
            <Button
              mode='contained'
              onPress={async () => {
                auth.signOut();
                await deleteStore('FitbookEmail');
                await deleteStore('FitbookPassword');
                dispatch(userStatus(false));
              }}
            >
              Logout
            </Button>
          </View>
        </View>
        <Modal
          visible={changePhoto}
          onDismiss={() => setChangePhoto(false)}
          contentContainerStyle={styles.modal}
        >
          {/* <View style={}> */}
            <PhotoForm />
          {/* </View> */}
        </Modal>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 120,
    marginTop: 20,
    marginBottom: 30,
  },
  body: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 25,
  },
  setting: {
    flexDirection: 'row',
    gap: 50,
  },
  modal: {
    margin: 20,
    top: -125,
  },
});
