import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'f65c319da894f8001dc2e1684683c200',
    language: 'pt-BR',
    page: 1
  }
})