import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sql } from '../database/Notas';


const Page2: React.FC = () => {

  const [text, setText] = useState<string>("");

  async function saveData(key:string, data:string){
    await AsyncStorage.setItem(key, data);
    
    const keys = await AsyncStorage.getAllKeys();

    const allData = await AsyncStorage.multiGet(["1","2"]);

  };

  useEffect(() => {
      async function request(){
      };
      request()
    }, []);

  return (
    <View>
    
    <TextInput
      style={styles.input}
      onChangeText={setText}
      value={text}
      placeholder="text"
    />

      <Button title='Salvar' onPress={() => {
        saveData("1", text);
        const tableSQL = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);";
        const insert = "INSERT INTO users (name) VALUES ('test1'); INSERT INTO users (name) VALUES ('test2'); INSERT INTO users (name) VALUES ('test3');";
        const get = "SELECT * FROM users"
        sql(tableSQL);
        sql(insert);
        sql(get).then((res)=> {
          for (const elemento of res["rows"]) {
            console.log(elemento);
        }


        })


      }}  />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  botaoView:{
    paddingLeft: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
});

export default Page2;