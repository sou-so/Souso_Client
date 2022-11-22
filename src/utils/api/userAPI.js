import { api } from './_axios';
import { LOGIN_API, LOGOUT_API } from './_ep';
import { authToken } from 'utils/authToken';

export const user = {
  login: data => api.post(LOGIN_API, data),
  logout: () =>
    api.delete(LOGOUT_API, {
      headers: {
        Authorization: `Bearer ${authToken.getToken()}`
      }
    })
};
