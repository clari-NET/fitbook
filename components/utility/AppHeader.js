import React from 'react';
import { useTheme, Appbar, TouchableRipple, Switch } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../redux/theme/themeSlice';

const AppHeader = ({ navigation, back }) => {
  const theme = useTheme();
  const { dark } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme?.colors.surface,
        },
      }}
    >
      <Appbar.Content title="Fitbook" />
        <Switch
          color={'orange'}
          value={dark}
          onValueChange={() => dispatch(toggle())}
        />
    </Appbar.Header>
  );
};

export default AppHeader;