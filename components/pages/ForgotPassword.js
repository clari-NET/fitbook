import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import {
  useTheme,
  Button,
  Text,
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
    <View style={styles.container}>
      <Image
        source={require('../../assets/LogoLogin.png')}
        style={{ width: 50, height: 60, resizeMode: 'contain', marginBottom: 80 }}
      />
      <Text>Reset your password</Text>
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
      <Button
        style={styles.btn}
        mode="elevated"
        buttonColor='#FFE6C7'
        textColor='#000'
        onPress={(e) => {
          handlePasswordReset(e);
        }}
      >
        Reset Password
      </Button>
      <Button
        style={styles.btn}
        mode="elevated"
        buttonColor='#FFE6C7'
        textColor='#000'
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
  success: {
    backgroundColor: '#00A67C',
  },
});
