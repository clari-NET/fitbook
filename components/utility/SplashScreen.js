import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, TouchableRipple, Image, Text } from 'react-native-paper';
import { useSelector } from 'react-redux';

function SplashScreen() {
  const theme = useTheme();
  const { dark } = useSelector((state) => state.theme);

  return (
    <View style={styles.container}>
      <Text>Checking user info...</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
