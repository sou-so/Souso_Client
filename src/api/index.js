import axios from 'axios';
import { interceptors } from './interceptor';

const BASE_URL = 'http://43.201.133.197:8080';
const HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json; charset=utf-8',
  withCredentials: true
};

const createAxios = () => {
  return axios.create({ baseURL: BASE_URL, headers: HEADERS });
};

const createAxiosWithToken = () => {
  const requestHTTP = axios.create({ baseURL: BASE_URL, headers: HEADERS });
  return interceptors(requestHTTP);
};

// No token
export const api = createAxios();

// With token
export const apiWithToken = createAxiosWithToken();
