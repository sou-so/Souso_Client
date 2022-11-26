import { api, apiWithToken } from 'api';
import { LOGIN, LOGOUT, MYPROFILE, SIGNOUT } from 'api/endpoints';

export const user = {
  getProfile: async () => {
    const res = await apiWithToken.get(MYPROFILE);
    return res.data;
  },
  login: async req => {
    const res = await api.post(LOGIN, req);
    return res.data;
  },
  logout: async () => {
    const res = await apiWithToken.delete(LOGOUT);
    return res;
  },
  signout: async () => {
    const res = await apiWithToken.delete(SIGNOUT);
    return res;
  }
};
