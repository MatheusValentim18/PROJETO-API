import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const LivrosService = {
  getLivros: () => axios.get(`${BASE_URL}/livros`),
  getLivro: (id) => axios.get(`${BASE_URL}/livros/${id}`),
  createLivro: (body) => axios.post(`${BASE_URL}/livros`, body),
  updateLivro: (id, body) => axios.put(`${BASE_URL}/livros/${id}`, body),
  deleteLivro: (id) => axios.delete(`${BASE_URL}/livros/${id}`),
};
