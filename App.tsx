import "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from "react-native";
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import theme from "./src/global/styles/theme";

import { AuthProvider, useAuth } from "./src/hooks/auth";

import { Routes } from './src/routes';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "EventEmitter.removeListener('url', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`."
])

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_700Bold
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  const { userStorageLoading } = useAuth();

  if (!appIsReady || userStorageLoading) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <View
          onLayout={onLayoutRootView}
          style={{
            flex: 1
          }}
        >
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />

          <AuthProvider>
            <Routes />
          </AuthProvider>
        </View>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
