import { StyleSheet, Text, View, Button } from 'react-native';

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Sign up, Swole Bro/Sis!</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
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