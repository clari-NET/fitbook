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
  const { isSignedIn } = useSelector((state) => state.user);

  return (
    <Appbar.Header style={{ justifyContent: 'space-between' }}>
      <Appbar.Content title='Fitbook' />
      {isSignedIn ? <Appbar.Action icon="cog" iconColor={theme.colors.primary} onPress={() => navigation.navigate('ProfileSettings')} /> : null}
    </Appbar.Header>
  );
}
