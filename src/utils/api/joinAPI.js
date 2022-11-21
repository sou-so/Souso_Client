import axios from 'axios';
import { JOIN_API } from './_ep';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

export const join = {
  submit: data => api.post(JOIN_API, data)
};
