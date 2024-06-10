import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { isAxiosError, AxiosResponse } from 'axios';
import Post from "../services/interfaces/Post";
import { getPosts, putPost, postPost, deletePost} from '../services/post';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Page2: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [user, setUser] = useState<string>("");

  
  useEffect(() => {
      async function request(){
        try{
          setPosts(await getPosts());
        } catch (error){
          if (isAxiosError(error)) {
            console.log(error.message)
          };
        };
      };
      request()
    }, []);

  return (
    <View>
    
    <TextInput
      style={styles.input}
      placeholder="ID"
      value={id}
      onChangeText={setId}
      keyboardType="numeric"
    />

    <TextInput
      style={styles.input}
      placeholder="title"
      value={title}
      onChangeText={setTitle}
    />

    <TextInput
      style={styles.input}
      placeholder="Body"
      value={body}
      onChangeText={setBody}
    />

    <TextInput
      style={styles.input}
      placeholder="User"
      value={user}
      onChangeText={setUser}
      keyboardType="numeric"
    />

    <View style={styles.botaoView}>
      <Button title='Criar' onPress={() =>{
        postPost({ title:title, body:body, userId: Number(user)}).then((res)=>{
          console.log(res);
        })
      }} />
      
      
      <Button title='Editar' color="green" onPress={() =>{
        putPost(id, {id:Number(id), title:title, body:body, userId: Number(user)}).then((res)=>{
          console.log(res)
        })
        
      }} />

<Button title='Deletar' color="red" onPress={() =>{
        deletePost(id).then((res)=>{
          console.log("deletado")
        })
        
      }} />
    </View>

    <ScrollView>
    {posts.reverse().map(item => (
        <View key={item.id}>
          <TouchableOpacity onPress={() => {
            setId(String(item.id));
            setTitle(item.title);
            setBody(item.body);
            setUser(String(item.userId))
          }}>
            <Text>ID: {item.id}</Text>
            <Text>Title: {item.title}</Text>
            <Text>Body: {item.body}</Text>
            <Text>User: {item.userId}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
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