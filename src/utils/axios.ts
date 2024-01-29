import axios from "axios";

const instance = axios.create({
  baseURL: "https://pokeapi.co/",
  timeout: 1000,
});

export default instance;
