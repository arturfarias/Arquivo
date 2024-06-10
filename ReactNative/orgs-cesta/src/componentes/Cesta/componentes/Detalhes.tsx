import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import Texto from '../../Texto'
import {IDetalhes} from '../../../interfaces/ICesta'

const Detalhes: React.FC<IDetalhes> = ({nome, logo, nomeFazenda, descricao, preco, botao}) => {
  return (
    <>
        <Texto style={styles.nome}>{nome}</Texto>
        <View style={styles.fazenda}>
          <Image source={logo} style={styles.imagemFazenda} />
          <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={styles.descricao}>{descricao}</Texto>
        <Texto style={styles.preco}>{preco}</Texto>

        <TouchableOpacity style={styles.botao} onPress={() => {}}>
        <Texto style={styles.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  nome:{
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },

  fazenda:{
    flexDirection: "row",
    paddingVertical: 12,
  },

  imagemFazenda:{
    width: 32,
    height: 32,
  },

  nomeFazenda:{
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },

  descricao:{
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },

  preco:{
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },

  botao:{
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },

  textoBotao:{
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});

export default Detalhes;