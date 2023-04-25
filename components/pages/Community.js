import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import CommunityList from '../lists/CommunityList.js';
import { useTheme } from 'react-native-paper';

export default function Community () {
  const { colors } = useTheme();
  // some function for 'onClick => navigateTo(Community)

    const sampleData = {
        id: 1,
        name: 'Roller Demons',
        banner: 'https://picsum.photos/700',
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
    <>
    <View style={[styles.main_container, { backgroundColor: colors.surface }]}>
      <View style={styles.bannerImage_container}>
      <Image
        style={styles.bannerImage}
        source={{uri: sampleData.banner}}
      />
      </View>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerName}>{sampleData.icon} {sampleData.name}</Text>
        <Text style={styles.bannerName}>test</Text>
      </View>
      {/* <CommunityList communities={new Array(3).fill(0)}/> */}
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
  },
  bannerImage_container: {
    width: '100%',
    height: 100,
    position: 'absolute',
    top: 0,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerContainer: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    top: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FF6000',
  },
  bannerBar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FF6000',
  },
  bannerName: {
    color: '#FFF',
  }
});
