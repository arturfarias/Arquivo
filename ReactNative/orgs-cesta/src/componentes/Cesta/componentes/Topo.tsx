import { Image, StyleSheet, Dimensions } from 'react-native';
import Texto from '../../Texto'
import {ITopo} from '../../../interfaces/ICesta'

import topo from '../../../../assets/topo.png';

const height = Dimensions.get('screen').height;

const Topo: React.FC<ITopo> = ({titulo}) => {
  return (
    <>
      <Image source={topo} style={styles.topo} />
      <Texto  style={styles.titulo}>{titulo}</Texto>
    </>
  );
};

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: height / 3,
      },
    
      titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
      },
});

export default Topo;