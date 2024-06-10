import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Home from './src/telas/Home';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.tela}>
     <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela:{
    flex:1,
  },
});

export default App;
