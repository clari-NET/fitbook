import React from 'react';
import {
  useTheme,
  Appbar,
  Switch,
  IconButton,
} from 'react-native-paper';
import { View, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { toggle } from '../../redux/theme/themeSlice';
import logo from '../../assets/Fitbook-logo-orange.png';

export default function AppHeader() {
  const navigation = useNavigation();
  const theme = useTheme();
  const { colors } = useTheme();
  const { dark } = useSelector((state) => state.theme);
  const { isSignedIn } = useSelector((state) => state.user);

  return (
    <Appbar.Header style={{ justifyContent: 'space-between' }}>
      <Appbar.Content title='Fitbook' />
      {isSignedIn ? <Appbar.Action icon="cog" iconColor={theme.colors.primary} onPress={() => navigation.navigate('ProfileSettings')} /> : null}
    </Appbar.Header>
  );
}
