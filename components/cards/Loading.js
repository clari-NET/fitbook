import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useTheme, ActivityIndicator } from 'react-native-paper';

export default function Loading() {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator animating color={colors.primary} />
    </View>
  );
}
