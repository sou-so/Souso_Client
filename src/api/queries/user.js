import { api } from 'api';
import { LOGIN, LOGOUT } from 'api/endpoints';
import { authToken } from 'utils/authToken';

export const user = {
  login: data => api.post(LOGIN, data),
  logout: () =>
    api.delete(LOGOUT, {
      headers: {
        Authorization: `Bearer ${authToken.getToken()}`
      }
    })
};
