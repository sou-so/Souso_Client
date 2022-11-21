import axios from 'axios';
import { authToken } from 'utils/authToken';
import { LOGIN_API } from './_ep';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

export const user = {
  login: data => api.post(LOGIN_API, data)
};

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
