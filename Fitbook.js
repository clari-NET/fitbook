import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import SignUp from './components/pages/SignUp';

export default function Fitbook({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello, Fit Bros/Sis!</Text>
      <Button
        title="Go to Sign-up Screen"
        onPress={() => {
          navigation.navigate('SignUp')
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
