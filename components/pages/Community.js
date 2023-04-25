import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Community({ community }) {
  const { colors } = useTheme();
  // some function for 'onClick => navigateTo(Community)

  return (
    <View
      style={[styles.container, { backgroundColor: colors.surface }]}
    />
  );
}
