import { StatusBar, View } from 'react-native';
import Cesta from './src/componentes/Cesta'
import React, { useEffect, useState} from 'react';
import * as Font from 'expo-font';
import {Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import mock from './src/mocks/Cesta'
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Montserrat-Bold': Montserrat_700Bold,
        'Montserrat-Regular': Montserrat_400Regular,
      });

      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={{flex:1}}>
      <StatusBar />
      <Cesta {...mock} />
    </View>
  );
}
