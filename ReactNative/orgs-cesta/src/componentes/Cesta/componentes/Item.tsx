import {View, StyleSheet, Image, FlatList, ListRenderItem} from 'react-native';
import Texto from '../../Texto'
import {IItens} from '../../../interfaces/ICesta'
import {IItem} from '../../../interfaces/ICesta'

const Itens: ListRenderItem<IItem> = ({ item: { nome, imagem } }) => {
  return (<View key={nome} style={styles.item}>
  <Image source={imagem} style={styles.imagem}/>
  <Texto style={styles.nome}>{nome}</Texto>
  </View>
  )
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    alignItems: "center",
    marginHorizontal: 16,
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },


});

export default Itens;