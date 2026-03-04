import axios from 'axios';

// Adicione o "export" aqui na linha 4
export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('saborecor:userData');
  const token = userData && JSON.parse(userData).token;

  config.headers.authorization = `Bearer ${token}`;

  return config;
});

// OPCIONAL: Se você preferir exportar como padrão no final do arquivo:
// export default api;aa