import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useTheme } from 'react-native-paper';

export default function Profile() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <Text >Hello from Profile page! This is where you'll see your profile or that of another user, depending on how you got here. we love props!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
