import { View, StyleSheet, FlatList } from 'react-native';
import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'
import Itens from './componentes/Item'
import {ICesta} from '../../interfaces/ICesta'
import Texto from '../Texto';

const Cesta: React.FC<ICesta> = ({topo, detalhes, itens}) => {
  return < >
    <FlatList
      data={itens.lista}
      renderItem={Itens}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={() => {
        return <> 
          <Topo {...topo} />
          <View style={styles.cesta}>
            <Detalhes {...detalhes} />
            <Texto style={styles.titulo}>{itens.titulo}</Texto>
          </View>
        </>
      }}
    />
    </>
};

const styles = StyleSheet.create({
  cesta:{
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});

export default Cesta;