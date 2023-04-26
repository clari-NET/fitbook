import React, { useState } from 'react';
import { useTheme, Text } from 'react-native-paper';
import {
  View, ScrollView, StyleSheet, Image, Button,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Post from '../cards/Post';
import EventList from '../lists/EventList';

export default function Community({ section }) {
  const [filter, setFilter] = useState('Recent');

  const filterData = [
    { key: 1, value: 'Hot' },
    { key: 2, value: 'Top' },
    { key: 3, value: 'Now' },
    { key: 4, value: 'This Week' },
    { key: 5, value: 'This Month' },
    { key: 6, value: 'This Year' },
    { key: 7, value: 'All Time' },
  ];

  return (
    <View>
      <SelectList
        setSelected={(val) => setFilter(val)}
        data={filterData}
        save='value'
        search={false}
        maxHeight={100}
        // onSelect={filter function}
      />
    </View>
  );
}
