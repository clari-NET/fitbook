import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, Text } from 'react-native-paper';

const styles = StyleSheet.create({
  banner: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function TextBanner({ text }) {
  const { colors } = useTheme();
  return (
    <View style={[styles.banner, { backgroundColor: colors.tertiary }]}>
      <Text style={{ color: 'white' }}>{text}</Text>
    </View>
  );
}
