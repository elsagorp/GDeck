import { Board } from './Board';
import axios from 'axios';

const API = 'http://localhost:3000';

export const getBoards = async () => {
  return await axios.get<Board[]>(`${API}`);
};

export const createBoard = async (board: Board) => {
  return await axios.post(`${API}`, board);
};

export const deleteBoard = async (id: string) => {
  return await axios.delete(`${API}/${id}`);
};
