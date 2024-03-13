import axios from "axios";

export const api = axios.create({
    baseURL: "https://projetofullstackapi.onrender.com",
    timeout: 8000,
})