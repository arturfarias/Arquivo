import { isAxiosError, AxiosResponse } from 'axios';
import api from './api';
import Post from "./interfaces/Post";

export async function getPosts(): Promise<Post[]> {
  try {
    const response: AxiosResponse<Post[]> = await api.get<Post[]>(`/posts`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function putPost(id: string, body: Post): Promise<Post> {
  try {
    const response: AxiosResponse<Post> = await api.put<Post>(`/posts/${id}`, body);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function postPost(body: Post): Promise<Post> {
  try {
    console.log(body);
    const response: AxiosResponse<Post> = await api.post<Post>(`/posts`, body);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deletePost(id:string): Promise<Post> {
  try {
    const response: AxiosResponse<Post> = await api.delete<Post>(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}