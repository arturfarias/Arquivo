import { View, StyleSheet, Button, Text, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import {getUsers, getUser} from '../services/user';
import User from "../services/interfaces/User";
import { isAxiosError } from 'axios';

const Page1: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<User>();
    const [id, setId] = useState<string>('1');
    
    useEffect(() => {
        async function request(){
          try{
            setUsers(await getUsers());
            setUser(await getUser(id));
          } catch (error){
            if (isAxiosError(error)) {
              console.log(error.message)
            };
          };
        };
        request()
      }, []);

    return (
    <View style={styles.name}>
        <Text>ID: {user?.id}</Text>
        <Text>Name:{user?.name}</Text>
        <Text>Phone:{user?.phone}</Text>
        <Text>Email:{user?.email}</Text>
        <TextInput keyboardType="numeric" onChangeText={setId} value={id} style={{backgroundColor:"green", color:"white"}} />
        <Button title='Buscar' onPress={() => {getUser(id).then((user:User)=>{setUser(user)})}} />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
  },
});

export default Page1;