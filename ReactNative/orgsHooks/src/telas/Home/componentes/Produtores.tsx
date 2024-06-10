import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, ListRenderItem } from 'react-native';

import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';


interface ILista {
    nome: string,
    imagem: any,
    distancia: string,
    estrelas: number,
}

interface Props  {
    topo: React.FC,  
};


const Produtores: React.FC<Props> = ({topo: Topo}) => {
    const [titulo, lista] = useProdutores();

    const TopoLista: ListRenderItem<{}> = () => {
        return (<>
          <Topo />
          <Text style={styles.titulo}>{ titulo }</Text>
          </>
        );
    };
      
  return (
    <FlatList 
       data={lista}
       renderItem={({ item }: {item: ILista}) => <Produtor {...item}/>}
       ListHeaderComponent={TopoLista} 
       keyExtractor={({nome}) => nome} />
  );
};

const styles = StyleSheet.create({
    titulo:{
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    },
});

export default Produtores;