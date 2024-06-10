import React, { useState } from 'react';
import { StyleSheet, View  } from 'react-native';

import Estrela from './Estrela';

interface Props {
    quantidade: number,
    editavel?: boolean,
    grande?: boolean,
};

const Estrelas: React.FC<Props> = ({
    quantidade:quantidadeAntiga,
    editavel=false,
    grande=false}) => {

    const [quantidade, setQuantidade] = useState<number>(quantidadeAntiga);

    const RenderEstrelas = (): JSX.Element[] => {
        const listaEstrelas = [];
        
        for (let i = 0; i < 5; i++){
            listaEstrelas.push(
                <Estrela
                    key ={i}
                    onPress={() => setQuantidade(i+1)}
                    desabilitada={editavel}
                    preenchida={i < quantidade}
                    grande={grande}
                />
            );
        };
        return listaEstrelas;
    };
  
    return (
      <View style={styles.estrelas}>
        <RenderEstrelas />
      </View>
    );

};

const styles = StyleSheet.create({
    estrelas:{
        flexDirection: 'row',
    },
});

export default Estrelas;