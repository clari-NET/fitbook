import { StyleSheet, View, Alert, Image } from 'react-native';
import {
  TextInput,
  Button,
  Text,
  Snackbar,
} from 'react-native-paper';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import db from '../../firebaseFiles/firebase.config';
import * as SecureStore from 'expo-secure-store';

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [failure, setFailure] = useState(false);
  const [success, setSuccess] = useState(false);

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  const handleSignUp = async () => {
    if (!email) {
      Alert.alert('Please include an email');
    } else if (!firstName) {
      Alert.alert('Please include your name');
    } else if (!password || password.length < 6) {
      Alert.alert('Password needs to be atleast 6 characters');
    }
    try {
      const auth = getAuth();
      const userData = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, { displayName: username });
      const timeStamp = serverTimestamp();
      const picNum = Math.round(Math.random() * 50);
      await setDoc(doc(db, 'users', userData.user.uid), {
        name: {
          first: firstName,
          last: lastName,
        },
        email,
        username,
        timeStamp,
        DMs: [],
        id: auth.currentUser.uid,
        profile_photo: `https://randomuser.me/api/portraits/men/${picNum}.jpg`,
      });
      await save('FitbookEmail', email);
      await save('FitbookPassword', password);

      // navigation.navigate('Interests');
    } catch (error) {
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
        <Text>
          Welcome
          {' '}
          {firstName}
        </Text>
      </Snackbar>
      <Snackbar
        visible={failure}
        onDismiss={onDismiss}
        duration={5000}
      >
        Error creating user: please use a valid email and more than 6 characters in the password!
      </Snackbar>
      <Image
        source={require('../../assets/LogoLogin.png')}
        style={{ width: 50, height: 60, resizeMode: 'contain', marginBottom: 60 }} />
      <Text style={styles.text}>Sign up, Swole Bro/Sis!</Text>
      <TextInput
        label="Email"
        autoCapitalize='none'
        value={email}
        onChangeText={email => setEmail(email)}
        mode="outlined"
        style={styles.input}
        activeOutlineColor='#fff'
        outlineColor='#fff'
        textColor='#FFF'
        overflow="hidden"
        theme={{ roundness: 30 }}
      />
      <TextInput
        label="First Name"
        value={firstName}
        onChangeText={firstName => setFirstName(firstName)}
        mode="outlined"
        style={styles.input}
        activeOutlineColor='#fff'
        outlineColor='#fff'
        textColor='#FFF'
        overflow="hidden"
        theme={{ roundness: 30 }}
      />
      <TextInput
        label="Last Name"
        value={lastName}
        onChangeText={lastName => setLastName(lastName)}
        mode="outlined"
        style={styles.input}
        activeOutlineColor='#fff'
        outlineColor='#fff'
        textColor='#FFF'
        overflow="hidden"
        theme={{ roundness: 30 }}
      />
      <TextInput
        label="Username"
        autoCapitalize='none'
        value={username}
        onChangeText={username => setUsername(username)}
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
        onChangeText={password => setPassword(password)}
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
        onPress={() => {
          handleSignUp();
        }}
      >Sign Up!</Button>
      <Text style={styles.text}>Already have an account?</Text>
      <Button
        style={styles.btn}
        mode="outlined"
        textColor='#fff'
        onPress={() => {
          navigation.navigate('Login');
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
