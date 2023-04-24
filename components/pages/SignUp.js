import { StyleSheet, Text, View, Button } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function SignUp({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <Text>Sign up, Swole Bro/Sis!</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="Sign Up!"
        onPress={() => {
          navigation.navigate('Interests');
        }}
      />
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