import axios from 'axios';
import { authToken } from 'utils/authToken';

export const api = axios.create({
  baseURL: 'http://43.201.133.197:8080',
  headers: {
    'Content-Type': 'application/json'
  }
});

axios.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${authToken.getToken()}`;
    config.withCredentials = true;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
