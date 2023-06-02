import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, ScrollView, FlatList,
} from 'react-native';
import { Card, List, Searchbar } from 'react-native-paper';
import Stat from '../cards/Stat';
import getNewID from '../utility/getNewID';

export default function StatList({ stats }) {
  return (
    <List.Section>
      {stats && stats.map((stat) => <Stat key={getNewID()} stat={stat} />)}
    </List.Section>
  );
}
