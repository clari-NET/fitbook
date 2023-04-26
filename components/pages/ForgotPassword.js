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
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import * as SecureStore from 'expo-secure-store';

export default function Login({ navigation }) {
  const { colors } = useTheme();
  // let currentUser = auth().currentUser;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [name, setName] = useState('Undefined');

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      if(userCredential.user) {
        await save('FitbookEmail', email);
        await save('FitbookPassword', password);
        navigation.navigate('Main');
      }

      const getName = await auth.currentUser.displayName;
      setName(getName);
      setSuccess(true);
    } catch (error) {
      console.log(error);
      setFailure(true);
    }
  };

  const onDismiss = () => {
    setSuccess(false);
    setFailure(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.secondary }]}>
      <Snackbar
        style={styles.success}
        visible={success}
        onDismiss={onDismiss}
        duration={3000}
      >
        Welcome back
        {' '}
        {name}
      </Snackbar>
      <Snackbar
        visible={failure}
        onDismiss={onDismiss}
        duration={3000}
      >
        Incorrect user credentials
      </Snackbar>
      <Text>Hello, Fit Bros/Sis!</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        mode="flat"
        style={styles.input}
        activeUnderlineColor="#000"
      />
      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password)}
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
          handleLogin(e);
        }}
      >
        Login
      </Button>
      <Text>Need to create an account?</Text>
      <Button
        style={styles.btn}
        mode="outlined"
        textColor={colors.primary}
        buttonColor={colors.surface}
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      >
        Sign-up
      </Button>
      <Button
        style={styles.btn}
        mode="outlined"
        textColor={colors.primary}
        buttonColor={colors.surface}
        onPress={() => {
          console.log('reset')
        }}
      >
        Forgot password?
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
