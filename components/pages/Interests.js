import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Interests({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>What are your interests?</Text>
      <Button
        title="Continue"
        onPress={() => {
          navigation.navigate('Main')
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
