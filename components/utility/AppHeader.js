import React from 'react';
import {
  useTheme,
  Appbar,
  Switch,
  Button,
} from 'react-native-paper';
import { View, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../redux/theme/themeSlice';
import logo from '../../assets/Fitbook-logo-orange.png';

export default function AppHeader({ onLogout }) {
  const theme = useTheme();
  const { colors } = useTheme();
  const { dark } = useSelector((state) => state.theme);
  const { isSignedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Appbar.Header style={{ justifyContent: 'center' }}>
      {/* {isSignedIn
        ? <Button mode='outlined' onPress={onLogout}>Logout</Button>
        : null} */}
      {/* <Appbar.Content style={{ fontWeight: 'bold' }} title='Fitbook' /> */}
      <View style={{ height: 45, width: 37 }}>
        <Image style={{ height: '90%', width: '90%' }} source={logo} />
      </View>
      {/* <Switch
        color={theme?.colors.primary}
        value={dark}
        onValueChange={() => dispatch(toggle())}
      /> */}
    </Appbar.Header>
  );
}
