import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
// import SignUp from './components/pages/SignUp';
import { useTheme } from 'react-native-paper';

export default function Login({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
