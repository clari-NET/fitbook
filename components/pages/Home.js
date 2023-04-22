import { Stylesheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello from Home!</Text>
      <Button
        title="Go to Sign-up Screen"
        onPress={() => {
          navigation.navigate('SignUp')
        }}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
