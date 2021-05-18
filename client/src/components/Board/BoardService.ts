import axios from "axios";

export  const getBoards = async() => {
    return await axios.get("http://localhost:3000/");
}