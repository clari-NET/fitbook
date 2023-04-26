import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, ScrollView, FlatList,
} from 'react-native';
import { Card, List, Text } from 'react-native-paper';
// import Stat from '../cards/Stat';

function getIcon(category) {
  switch (category) {
    case 'Swimming':
      return 'swim';
    case 'Bench Press':
      return 'weight-lifter';
    case 'Golf':
      return 'golf';
    case 'Basketball':
      return 'basketball-hoop';
    case 'Volleyball':
      return 'volleyball';
    case 'Soccer':
      return 'soccer';
    case 'Baseball':
      return 'baseball-bat';
    case 'Cycling':
      return 'bike-fast';
    default:
      return 'arm-flex';
  }
}

export default function StatList({ stat }) {
  const [isExpanded, setIsExpanded] = useState(false);
  // console.log(stat);
  return (
    <List.Accordion title={stat.category} expanded={isExpanded} onPress={() => setIsExpanded(!isExpanded)} left={(props) => <List.Icon {...props} icon={getIcon(stat.category)} />}>
      <List.Item title={`${stat.field}: ${stat.record}`} />
    </List.Accordion>
  );
}
