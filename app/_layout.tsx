import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { Stack, router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    mon: require('../assets/fonts/Montserrat-Regular.ttf'),
    'mon-sb': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'mon-b': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
 

  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="(modals)/login" options={{
          title: "Log in or Sign Up",
          headerTitleStyle: {
            fontFamily: 'mon-sb',
          },
          presentation: 'modal',
          headerLeft: () =>(
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28}/>
            </TouchableOpacity>
          )
        }}/>
        <Stack.Screen name="Listing/[id]" options={ {headerTitle: '', headerTransparent: false}}/>
        <Stack.Screen name="(modals)/booking" options={ {presentation: 'transparentModal',
          animation: 'fade',
        headerLeft: () =>(
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28}/>
            </TouchableOpacity>
          )
          }}/>
      </Stack>

  );
}
