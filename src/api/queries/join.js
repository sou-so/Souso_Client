import { api } from 'api';
import { JOIN, CHECK_NICKNAME } from 'api/endpoints';

export const join = {
  submit: async req => {
    const res = await api.post(JOIN, req);
    return res.data;
  },
  nickname: async req => {
    const res = await api.head(CHECK_NICKNAME(req));
    return res.data;
  }
  // sendCode: data => api.post(SEND_CODE, data)
  // verifyCode: data => api.head(VERIFY_CODE, data)
};
