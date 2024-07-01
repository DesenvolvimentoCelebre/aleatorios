import axios from "axios";

const apiAleatorios = axios.create({
  baseURL: "http://187.1.139.15:21066",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiAleatorios;
