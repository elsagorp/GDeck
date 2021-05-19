import axios from "axios";
import { Deck } from "./Deck";

const API = "http://localhost:3000";

export const getDecks = async (id: string) => {
  return await axios.get<Deck[]>(`${API}/${id}`);
};
