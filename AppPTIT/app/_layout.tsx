import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from '@/hooks/useColorScheme';
//import { ErrorProvider } from './error/errorContext';

import HomePage from './homePage';
import TempPage from './tempPage';
import UVPage from './uvPage';
import RFIDPage from './rfidPage';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
//const Stack = createStackNavigator();

export type RootStackParamList = {
  homePage: undefined; 
  tempPage: undefined; 
  uvPage: undefined; 
  rfidPage: undefined; 
};

const Stack = createStackNavigator<RootStackParamList>();

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (loaded) {
        await SplashScreen.hideAsync();
      }
    };

    hideSplashScreen();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    //<ErrorProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="homePage" component={HomePage} />
          <Stack.Screen name="tempPage" component={TempPage} />
          <Stack.Screen name="uvPage" component={UVPage} />
          <Stack.Screen name="rfidPage" component={RFIDPage} />
      </Stack.Navigator>
    //</ErrorProvider>
  );
};

export default RootLayout;