import React from 'react';
import { StyleSheet } from 'react-native';

import  Topo from './componentes/Topo';
import  Produtores from './componentes/Produtores';

const Home: React.FC = () => {
  return (<>
      <Produtores topo={Topo} />
  </>
  );
};

const styles = StyleSheet.create({

});

export default Home;