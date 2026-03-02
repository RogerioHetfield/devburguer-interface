import axios from 'axios';

export const api = axios.create({ baseURL: 'https://devburguer-api.onrender.com' })

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('saborecor:userData');

  const token = userData && JSON.parse(userData).token;

  config.headers.authorization = `Bearer ${token}`;

  return config;
});