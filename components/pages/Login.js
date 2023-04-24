import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useTheme, Button, Text, Snackbar } from 'react-native-paper';
import React, { useState } from 'react';
// import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

export default function Login({ navigation }) {
  const { colors } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const handleLogin = async (e) =>{
    e.preventDefault()

    try {
    const auth = getAuth()
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    if(userCredential.user) {
      navigation.navigate('Main')
    }

    const name = await auth.currentUser.displayName
    toast.success(`Welcome back ${name}`)
    setSuccess(true);
    } catch (error) {
        console.log(error)
        toast.error('Incorrect user credentials')
    }
}

  return (
    <>
    <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <Text>Hello, Fit Bros/Sis!</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={email => setUsername(email)}
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
          console.log('Create handleLogin')
        }}
      >Login</Button>
      <Text>Need to create an account?</Text>
      <Button
        mode="outlined"
        textColor={colors.secondary}
        onPress={() => {
          navigation.navigate('SignUp')
        }}
      >Sign-up</Button>
      <StatusBar style="auto" />
    </View>
    </>

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
