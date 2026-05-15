import axios from 'axios';
import { useAuthStore } from '../store/authStore';

const api = axios.create({
  // URL para uso local en PC:
  // baseURL: 'http://localhost:3001/api',
  baseURL: 'https://cloudy-autumn-viewing-ferrari.trycloudflare.com/api',
  headers: {
    'ngrok-skip-browser-warning': 'true'
  }
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
