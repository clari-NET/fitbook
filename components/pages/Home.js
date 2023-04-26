import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'react-native-paper';
import Feed from './Feed';

export default function Home({ theme }) {
  const { colors } = useTheme();

  return (
    <Feed />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
