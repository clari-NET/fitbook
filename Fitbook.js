import React, { useEffect, useRef } from 'react';
import {
  Provider as PaperProvider,
  adaptNavigationTheme,
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import merge from 'deepmerge';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import ForgotPassword from './components/pages/ForgotPassword';
import Interests from './components/pages/Interests';
import Main from './components/pages/Main';
import AppHeader from './components/utility/AppHeader';
import SplashScreen from './components/utility/SplashScreen';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { userStatus, loaded } from './redux/user/userSlice';
import * as SecureStore from 'expo-secure-store';

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
    tertiary: '#000',
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
    tertiary: '#141729',
  },
};

// Create Stack.Navigator component
const Stack = createNativeStackNavigator();

function getAppHeader(props) {
  return <AppHeader {...props} />;
}

export default function Fitbook() {
  const { dark } = useSelector((state) => state.theme);
  const { isSignedIn, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const auth = getAuth();
  const isMounted = useRef(true);

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      return result;
    }
    return false;
  }

  useEffect(() => {
    const getUser = async () => {
      try {
        const email = await getValueFor('FitbookEmail');
        const password = await getValueFor('FitbookPassword');
        if (email && password) {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          if (userCredential.user) {
            dispatch(userStatus(true));
          }
          dispatch(loaded());
        } else {
          onAuthStateChanged(auth, (user) => {
            if (user) {
              dispatch(userStatus(!!user));
            }
            dispatch(loaded());
          });
        }
      } catch(err) {
        console.log(err)
      }
    };
    getUser();

    return () => {
      isMounted.current = false;
    };
  }, [isMounted, isSignedIn, isLoading]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <PaperProvider theme={dark ? CustomDarkTheme : CustomDefaultTheme}>
      <NavigationContainer theme={dark ? CustomDarkTheme : CustomDefaultTheme}>
        <Stack.Navigator
          initialRouteName={isSignedIn ? 'Main' : 'Login'}
          screenOptions={{ header: getAppHeader }}
        >
          {isSignedIn ? (
            <>
              <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
              <Stack.Screen name="Interests" component={Interests} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            </>
          )}

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
