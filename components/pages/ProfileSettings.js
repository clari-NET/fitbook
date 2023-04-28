import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  useTheme, Text, Switch, Avatar, Button, IconButton,
} from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../redux/theme/themeSlice';

export default function ProfileSettings({ onLogout, profile }) {
  const theme = useTheme();
  const { dark } = useSelector((state) => state.theme);
  const { isSignedIn } = useSelector((state) => state.user);
  const [isNotifyOn, setisNotifyOn] = useState(true);
  const dispatch = useDispatch();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <View style={[styles.header]}>
        <Avatar.Image size={150} source={require('../../assets/SwolebrahamLincoln.png')} />
        <IconButton icon="plus-circle" iconColor={theme.colors.primary} size={50} style={{ position: 'absolute', marginTop: -5, marginLeft: 115, backgroundColor: 'transparent' }} onPress={() => console.log('Pressed')} />
      </View>
      <View style={[styles.body]}>
        <Text variant="headlineLarge">Email Notifications:</Text>
        <Switch value={isNotifyOn} onValueChange={() => setisNotifyOn(!isNotifyOn)} />
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
        <Button mode='contained' onPress={onLogout}>Logout</Button>
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
