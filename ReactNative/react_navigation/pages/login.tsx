import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamList }  from '../rotas/navigation';
import { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

interface Props {
  navigation: StackNavigationProp<ParamList, 'Login'>;
  route: RouteProp<ParamList, 'Login'>
};


const  LoginScreen: React.FC<Props> = ({ navigation, route }) => {

  const routes = useRoute<RouteProp<ParamList, 'Login'>>();
  return (
    <>
    <View style={styles.container}>
      <Text>texto</Text>
      <Button title='Login' onPress={() => {navigation.pop()}}></Button>
      <Button title='Tab' onPress={() => {navigation.navigate('Tab')}}></Button>
      <Button title='Drawer' onPress={() => {navigation.navigate('Drawer')}}></Button>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default LoginScreen;