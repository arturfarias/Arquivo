import React from 'react';
import { Image, StyleSheet, TouchableOpacity, GestureResponderEvent  } from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

interface Props{
    onPress: (event: GestureResponderEvent) => void,
    desabilitada: boolean,
    preenchida: boolean,
    grande: boolean,
};

const Estrela: React.FC<Props> = ({onPress, desabilitada=true, preenchida, grande=false}) => {
  
    const getImagem = () => {
        if (preenchida) {
            return estrela
        };
        return estrelaCinza;
    };

    const styles = criarEstilos(grande);

    return (
        <TouchableOpacity 
            onPress={onPress}
            disabled={!desabilitada}
        >
            <Image source={getImagem()} style={styles.estrela} />
        </TouchableOpacity>
    );

};

function criarEstilos(grande: boolean) {
    return StyleSheet.create({
        estrela: {
            width: grande ? 36 : 12,
            height: grande ? 36 : 12,
            marginRight: 2,
        },
    });
};

export default Estrela;