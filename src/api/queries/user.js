import { api, apiWithToken } from 'api';
import {
  LOGIN,
  LOGOUT,
  MYBOOKMARKS,
  MYPOSTS,
  MYPROFILE,
  SIGNOUT
} from 'api/endpoints';

export const user = {
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
  },
  getProfile: async () => {
    const res = await apiWithToken.get(MYPROFILE);
    return res.data;
  },
  myPosts: async ({ cursorId }) => {
    const res = await apiWithToken.get(MYPOSTS(cursorId));
    return res.data;
  }
};
