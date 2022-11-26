import { authToken } from 'utils/authToken';

export function interceptors(requestHTTP) {
  requestHTTP.interceptors.request.use(
    async config => {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${authToken.getToken()}`;
        return config;
      }
    },
    error => {
      return Promise.reject(error);
    }
  );
  return requestHTTP;
}
