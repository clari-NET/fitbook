import React from 'react';
import {
  useTheme,
  Appbar,
  Switch,
  Button,
} from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../redux/theme/themeSlice';

export default function AppHeader({ onLogout }) {
  const theme = useTheme();
  const { dark } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <Appbar.Header style={{ justifyContent: 'space-between' }}>
      <Button mode='outlined' onPress={onLogout}>Logout</Button>
      <Appbar.Content title='Fitbook' />
      <Switch
        color={theme?.colors.primary}
        value={dark}
        onValueChange={() => dispatch(toggle())}
      />
    </Appbar.Header>
  );
}
