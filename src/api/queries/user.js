import { api, apiWithToken } from 'api';
import { LOGIN, LOGOUT } from 'api/endpoints';

export const user = {
  login: async req => {
    const res = await api.post(LOGIN, req);
    return res.data;
  },
  logout: async () => {
    const res = await apiWithToken.delete(LOGOUT);
    return res;
  }
};
