import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useEffect, useState } from 'react';

import {carregaTopo} from '../../../servicos/carregaDados';
import logo from '../../../assets/logo.png';

interface ITopo {
  boasVindas: string;
  legenda: string;
}

const Topo: React.FC = () => {
  const [topo, setTopo] = useState<ITopo>({ boasVindas: '', legenda: '' });

  useEffect(() => {
        const dados =  carregaTopo();
        setTopo(dados);
  }, []);

  return (
    <View style={styles.topo}>
      <Image source={logo} style={styles.image} />
        <Text style={styles.boasVindas} >{topo.boasVindas}</Text>
        <Text style={styles.legenda}>{topo.legenda}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topo:{
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  image:{
    width: 70,
    height: 28,
  },
  boasVindas:{
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  legenda:{
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
});

export default Topo;