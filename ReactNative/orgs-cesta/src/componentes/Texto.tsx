import { Text, View, StyleSheet, TextStyle } from 'react-native';

interface Props  {
    children: React.ReactNode,
    style?: TextStyle;
};

const Texto: React.FC<Props> = ({ children, style }) => {
    let estilo = styles.texto;

    if (style?.fontWeight === 'bold') {
        estilo = styles.textoNegrito
    }

  return (
    <Text style={[style, estilo]}>{ children }</Text>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontFamily: "Montserrat-Regular",
  },
  textoNegrito:{
    fontFamily: "Montserrat-Bold",
    fontWeight: "normal",
  },
});

export default Texto;