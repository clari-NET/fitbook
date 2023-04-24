import { StyleSheet, View } from 'react-native';
import { useTheme, TextInput, Button, Text } from 'react-native-paper';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function SignUp({ navigation }) {
  const { colors } = useTheme();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <Text>Sign up, Swole Bro/Sis!</Text>
      <TextInput
        label="Username"
        value={username}
        onChangeText={username => setUsername(username)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={email => setEmail(email)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={password => setPassword(password)}
        mode="outlined"
        style={styles.input}
      />
      <Button
        mode="elevated"
        buttonColor={colors.primary}
        textColor={colors.secondary}
        onPress={() => {
          console.log('Create handleSign-up')
        }}
      >Sign Up!</Button>
      <Text>Already have an account?</Text>
      <Button
        mode="outlined"
        textColor={colors.secondary}
        onPress={() => {
          navigation.navigate('Login')
        }}
      >Login</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
  },
});