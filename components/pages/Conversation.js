import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, StyleSheet} from 'react-native';
import { Text, useTheme } from 'react-native-paper';

export default function Conversation ({ currConvo, setCurrConvo }) {

  const { colors } = useTheme();

  return (
    <>
      <TouchableOpacity
          onPress={() => {
            console.log('back button was pressed');
            setCurrConvo("DMList")
          }}>
        <Text>Back Button</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={() => {
            console.log('profile img was pressed');
          }}>
        <Text>{currConvo}'s profile img </Text>
      </TouchableOpacity>
      <View style={[styles.container, { backgroundColor: colors.surface }]}>
        <Text >Conversation Page</Text>
      </View>
      <View>
        <Text>Keyboard</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});