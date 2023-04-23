import { Provider as PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Interests from './components/pages/Interests';
import Main from './components/pages/Main';
import AppHeader from './components/utility/AppHeader';
import { useSelector } from 'react-redux';

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';
import merge from 'deepmerge';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

// Create Stack.Navigator component
const Stack = createNativeStackNavigator();


export default function Fitbook({ navigation }) {
  const { dark } = useSelector((state) => state.theme);

  return (
    <PaperProvider theme={dark ? CombinedDarkTheme : CombinedDefaultTheme}>
      <NavigationContainer theme={dark ? CombinedDarkTheme : CombinedDefaultTheme}>
        <Stack.Navigator initialRouteName="Landing"  screenOptions={{
          header: (props) => <AppHeader {...props} />,
        }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Interests" component={Interests} />
          <Stack.Screen name="Main" component={Main} />

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
