import { StyleSheet, View, Alert } from 'react-native';
import { useTheme, TextInput, Button, Text, Snackbar } from 'react-native-paper';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {setDoc, doc, serverTimestamp} from 'firebase/firestore';
import db from '../../firebase/firebase.config';
import * as SecureStore from 'expo-secure-store';

export default function SignUp({ navigation }) {
  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [failure, setFailure] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSignUp = async () => {
    if (!email) {
      Alert.alert('Please include an email');
    } else if (!name) {
      Alert.alert('Please include your name');
    } else if (!password || password.length < 6) {
      Alert.alert('Password needs to be atleast 6 characters');
    }
    try {
      const auth = getAuth();
      const userData = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, { username });
      const timeStamp = serverTimestamp();
      await setDoc(doc(db, 'users', userData.user.uid), {
        name,
        email,
        timeStamp,
      });

      navigation.navigate('Interests');
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
        <Text>
          Welcome
          {' '}
          {name}
        </Text>
      </Snackbar>
      <Snackbar
        visible={failure}
        onDismiss={onDismiss}
        duration={5000}
      >
        Error creating user: please use a valid email and more than 6 characters in the password!
      </Snackbar>
      <Text>Sign up, Swole Bro/Sis!</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={email => setEmail(email)}
        mode="flat"
        style={styles.input}
        activeUnderlineColor="#000"
      />
      <TextInput
        label="name"
        value={name}
        onChangeText={name => setName(name)}
        mode="flat"
        style={styles.input}
        activeUnderlineColor="#000"
      />
      <TextInput
        label="Username"
        value={username}
        onChangeText={username => setUsername(username)}
        mode="flat"
        style={styles.input}
        activeUnderlineColor="#000"
      />
      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={password => setPassword(password)}
        mode="flat"
        style={styles.input}
        activeUnderlineColor="#000"
      />
      <Button
        style={styles.btn}
        mode="elevated"
        buttonColor={colors.primary}
        textColor={colors.secondary}
        onPress={() => {
          handleSignUp();
        }}
      >Sign Up!</Button>
      <Text>Already have an account?</Text>
      <Button
        style={styles.btn}
        mode="outlined"
        textColor={colors.primary}
        buttonColor={colors.surface}
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
});
