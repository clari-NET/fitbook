import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, ScrollView, FlatList,
} from 'react-native';
import { Card, List, Searchbar } from 'react-native-paper';
import Stat from '../cards/Stat';

export default function StatList({ stats }) {
  return (
    <List.Section>
      {stats && stats.map((stat) => <Stat key={stat.category} stat={stat} />)}
    </List.Section>
  );
}
