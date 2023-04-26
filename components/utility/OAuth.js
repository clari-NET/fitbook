import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import {
  useTheme,
  Button,
  Text,
  Snackbar,
} from 'react-native-paper';
import { getAuth, signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { FontAwesome5 } from '@expo/vector-icons';
import db from '../../firebaseFiles/firebase.config';

export default function ForgotPassword({ navigation }) {
  const { colors } = useTheme();

  const googleLogin = async() => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      const result = await signInWithCredential(auth, provider);
      console.log('p[oppppppp', result)
      const user = result.user;

      // Check for user
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      const existingName = docSnap._document.data.value.mapValue.fields.name.stringValue;

      // If user doesnt exist, create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      } else if (existingName !== user.displayName) {
        if (window.confirm('This email already exists, would you like update your display name to that of the google account?')) {
          updateDoc(docRef, { name: user.displayName });
        }
      }
      navigation.navigate('Main');
    } catch (error) {
      console.log(error)
      console.log('Could not authorize with google');
    }
  };

  return (
    <FontAwesome5.Button style={styles.googleButton} name="google" onPress={googleLogin}>
      <Text>Log In With Google</Text>
    </FontAwesome5.Button>
  );
}

const styles = StyleSheet.create({
  googleButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
