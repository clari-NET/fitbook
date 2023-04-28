import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
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
    <View style={styles.container}>
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
      <Image
        source={require('../../assets/LogoLogin.png')}
        style={{ width: 50, height: 60, resizeMode: 'contain', marginBottom: 80 }}
      />
      <Text style={ styles.text }>Hello, Fit Bros/Sis!</Text>
      <TextInput
        label="Email"
        autoCapitalize='none'
        value={email}
        onChangeText={(email) => setEmail(email)}
        mode="outlined"
        style={styles.input}
        activeOutlineColor='#fff'
        outlineColor='#fff'
        textColor='#FFF'
        overflow="hidden"
        theme={{ roundness: 30 }}
      />
      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password)}
        mode="outlined"
        style={styles.input}
        activeOutlineColor='#fff'
        outlineColor='#fff'
        textColor='#FFF'
        overflow="hidden"
        theme={{ roundness: 30 }}
      />
      <Button
        style={styles.btn}
        mode="elevated"
        buttonColor='#FFE6C7'
        textColor='#000'
        onPress={(e) => {
          handleLogin(e);
        }}
      >
        Login
      </Button>
      <Button
        style={styles.btn}
        mode="elevated"
        buttonColor='#FFE6C7'
        textColor='#000'
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}
      >
        Forgot password?
      </Button>
      <Text style={ styles.text }>Need to create an account?</Text>
      <Button
        style={styles.btn}
        mode="outlined"
        textColor='#fff'
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      >
        Sign-up
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
    backgroundColor: '#FF6000',
  },
  input: {
    width: '80%',
    marginTop: 5,
    backgroundColor: '#FF6000',
    borderRadius: 30,
  },
  btn: {
    width: '60%',
    marginTop: 15,
    marginBottom: 5,
    borderRadius: 30,
    borderColor: '#fff',
  },
  text: {
    color: '#fff',
  },
});
