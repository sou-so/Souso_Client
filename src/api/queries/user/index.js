import { api, apiWithToken } from 'api';
import * as EP from './endpoint';

export const user = {
  login: async req => {
    const res = await api.post(EP.LOGIN, req);
    return res.data;
  },
  logout: async () => {
    const res = await apiWithToken.delete(EP.LOGOUT);
    return res;
  },
  signout: async () => {
    const res = await apiWithToken.delete(EP.SIGNOUT);
    return res;
  },
  getProfile: async () => {
    const res = await apiWithToken.get(EP.MYPROFILE);
    return res.data;
  },
  editProfile: async req => {
    const res = await apiWithToken.patch(EP.MYPROFILE, req);
    return res.data;
  },
  myPosts: async ({ cursorId }) => {
    const res = await apiWithToken.get(EP.MYPOSTS(cursorId));
    return res.data;
  },
  myBookmarks: async ({ categoryId, pageId }) => {
    const res = await apiWithToken.get(EP.MYBOOKMARKS(categoryId, pageId));
    return res.data;
  }
};
