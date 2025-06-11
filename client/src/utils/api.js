import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Your backend URL
  withCredentials: true,
});

// Add request interceptor to include cookies
api.interceptors.request.use((config) => {
  const token = Cookies.get('connect.sid'); // Session cookie name
  if (token) {
    config.headers.Cookie = `connect.sid=${token}`;
  }
  return config;
});

export default api;