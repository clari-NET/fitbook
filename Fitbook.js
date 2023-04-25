import React from 'react';
import { Provider as PaperProvider, adaptNavigationTheme, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import merge from 'deepmerge';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Interests from './components/pages/Interests';
import Main from './components/pages/Main';
import AppHeader from './components/utility/AppHeader';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

const CustomDarkTheme = {
  ...CombinedDarkTheme,
  roundness: 2,
  colors: {
    ...CombinedDarkTheme.colors,
    surface: '#141729',
    primary: '#FF6000',
    secondary: '#5ACDED',
  },
};

const CustomDefaultTheme = {
  ...CombinedDefaultTheme,
  roundness: 2,
  colors: {
    ...CombinedDefaultTheme.colors,
    surface: '#FFF6C7',
    primary: '#5ACDED',
    secondary: '#FF6000',
  },
};

// Create Stack.Navigator component
const Stack = createNativeStackNavigator();

export default function Fitbook({ navigation }) {
  const { dark } = useSelector((state) => state.theme);

  return (
    <PaperProvider theme={dark ? CustomDarkTheme : CustomDefaultTheme}>
      <NavigationContainer theme={dark ? CustomDarkTheme : CustomDefaultTheme}>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{ header: () => <AppHeader /> }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Interests" component={Interests} />
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
