import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamList }  from '../rotas/navigation';

interface Props {
  navigation: StackNavigationProp<ParamList, 'Home'>;
};

const  HomeScreen: React.FC<Props> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title='Login' onPress={() => {navigation.navigate('Login', {name:"batata"})}}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
