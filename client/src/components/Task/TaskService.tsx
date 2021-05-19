import axios from 'axios';
import { Task } from './Task';

const API = 'http://localhost:3000';

export const getTasks = async (boardId: string, deckId: string) => {
  return await axios.get<Task[]>(`${API}/${boardId}/${deckId}`);
};

export const createTask = async (task:Task, boardId: string, deckId: string) => {
  return await axios.post<Task[]>(`${API}/${boardId}/${deckId}`, task);
};

export const deleteTask = async (boardId: string, task:Task) => {
  return await axios.delete<Task>(`${API}/${boardId}/${task.deckId}/${task._id}`);
};