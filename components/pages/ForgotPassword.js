import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import {
  useTheme,
  Button,
  Text,
  Snackbar,
} from 'react-native-paper';
import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword({ navigation }) {
  const { colors } = useTheme();
  // let currentUser = auth().currentUser;

  const [email, setEmail] = useState('');

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.secondary }]}>
      <Text>Reset your password</Text>
      <TextInput
        label="Email"
        autoCapitalize='none'
        value={email}
        onChangeText={(email) => setEmail(email)}
        mode="flat"
        style={styles.input}
        activeUnderlineColor="#000"
      />
      <Button
        style={styles.btn}
        mode="elevated"
        buttonColor={colors.primary}
        textColor={colors.secondary}
        onPress={(e) => {
          handlePasswordReset(e);
        }}
      >
        Reset Password
      </Button>
      <Button
        style={styles.btn}
        mode="outlined"
        textColor={colors.primary}
        buttonColor={colors.surface}
        onPress={() => {
          navigation.navigate('Login');
        }}
      >
        Sign-in
      </Button>
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
    marginTop: 5,
  },
  btn: {
    width: '60%',
    marginTop: 5,
    marginBottom: 5,
  },
  success: {
    backgroundColor: '#00A67C',
  },
});
