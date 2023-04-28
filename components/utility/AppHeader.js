import React from 'react';
import {
  useTheme,
  Appbar,
  Switch,
  IconButton,
} from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../redux/theme/themeSlice';

export default function AppHeader({ navigation }) {
  const theme = useTheme();

  return (
    <Appbar.Header style={{ justifyContent: 'space-between' }}>
      <Appbar.Content title='Fitbook' />
      <Appbar.Action icon="cog" iconColor={theme.colors.primary} onPress={() => navigation.navigate('ProfileSettings')} />
    </Appbar.Header>
  );
}
