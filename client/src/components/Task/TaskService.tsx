import axios from "axios";
import { Task } from "./Task";

const API = "http://localhost:3000";

export const getTasks = async (boardId: string, deckId: string) => {
  return await axios.get<Task[]>(`${API}/${boardId}/${deckId}`);
};
