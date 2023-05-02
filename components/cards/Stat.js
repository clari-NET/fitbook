import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Card, List, Text } from 'react-native-paper';
import getIcon from '../utility/getIcon';
// import Stat from '../cards/Stat';

export default function StatList({ stat }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <List.Accordion
      title={stat.category}
      expanded={isExpanded}
      onPress={() => setIsExpanded(!isExpanded)}
      left={(props) => <List.Icon {...props} icon={getIcon(stat.category)} />}
    >
      <List.Item title={`${stat.field}: ${stat.record}`} />
    </List.Accordion>
  );
}
