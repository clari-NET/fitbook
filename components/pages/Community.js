import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CommunityList from '../lists/CommunityList.js';
import { useTheme } from 'react-native-paper';

export default function Community () {
  const { colors } = useTheme();
  // some function for 'onClick => navigateTo(Community)

    const sampleData = {
        id: 1,
        name: 'Roller Demons',
        banner: 'https://unsplash.com/photos/MTwzYSHnoXE',
        icon: 'U+1F6F9',
        user: {
            user_id: 12,
            username: 'swolebraham',
        },
        location: 'San Diego, CA',
        members: [
          1, 2, 3, 4, 5
        ],
    }

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <Image
          source={{uri: sampleData.banner}}
      />
      <CommunityList communities={new Array(4).fill(0)}/>
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
