import React, { useState } from 'react';
import { useTheme, Text } from 'react-native-paper';
import {
  View, StyleSheet, Image, Button,
} from 'react-native';
import Feed from './Feed';
import JoinCommunity from '../buttons/JoinCommunity';

const defaultImage = 'https://picsum.photos/700';
const defaultIcon = 'U+1F6F9';

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  bannerImage_container: {
    width: '100%',
    height: 100,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  banner_container: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FF6000',
  },
  bannerName: {
    color: '#FFF',
  },
});

export default function Community({ route }) {
  const { colors } = useTheme();

  const { community } = route.params;

  return (
    <View style={[styles.main_container, { backgroundColor: colors.surface }]}>
      <View style={styles.bannerImage_container}>
        <Image
          style={styles.bannerImage}
          source={{ uri: community.banner || defaultImage }}
        />
      </View>
      <View style={styles.banner_container}>
        <Text style={styles.bannerName}>
          {community.icon || defaultIcon}
          {community.name}
        </Text>
        <JoinCommunity communityId='placeholder' />
      </View>
      <Feed />
    </View>
  );
}