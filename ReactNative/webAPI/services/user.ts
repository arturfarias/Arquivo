import { isAxiosError, AxiosResponse } from 'axios';
import api from './api';
import User from "./interfaces/User";

export async function getUsers(): Promise<User[]> {
  try {
    const response: AxiosResponse<User[]> = await api.get<User[]>(`/users`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getUser(id: string): Promise<User> {
  try {
    const response: AxiosResponse<User> = await api.get<User>(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}