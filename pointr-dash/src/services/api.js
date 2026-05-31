import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backnend-pointr.onrender.com',
  timeout: 10000,
});

export default api;