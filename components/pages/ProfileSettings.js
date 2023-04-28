import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  useTheme, Text, Switch, Avatar, Button, IconButton,
} from 'react-native-paper';
import { getAuth } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import * as SecureStore from 'expo-secure-store';
import { toggle } from '../../redux/theme/themeSlice';
import { docQuery } from '../../firebaseFiles/firebase.config';
import { userStatus } from '../../redux/user/userSlice';

const auth = getAuth();

export default function ProfileSettings({ route, user }) {
  const theme = useTheme();
  const { dark } = useSelector((state) => state.theme);
  const [userData, setUserData] = useState({});
  const [isNotifyOn, setisNotifyOn] = useState(true);
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
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <View style={[styles.header]}>
        {userData && <Avatar.Image size={150} source={{ uri: userData.profile_photo }} />}
        <IconButton
          icon="plus-circle"
          iconColor={theme.colors.primary}
          size={50}
          style={{
            position: 'absolute', marginTop: -5, marginLeft: 115, backgroundColor: 'transparent',
          }}
          onPress={() => console.log('Pressed')}
        />
      </View>
      <View style={[styles.body]}>
        <Text variant="headlineLarge">Light/Dark Mode:</Text>
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
    marginTop: 50,
  },
  body: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
