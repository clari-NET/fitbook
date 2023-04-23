import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CommunityList from '../lists/CommunityList.js';
import { useTheme } from 'react-native-paper';

export default function Community () {
  const { colors } = useTheme();
  // some function for 'onClick => navigateTo(Community)

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <Text >Hello from Community page, this page will hold the list of available communities and also allow you to search for communities. maybe suggestions too. yayyy!</Text>
      <CommunityList communities={new Array(3).fill(0)}/>
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