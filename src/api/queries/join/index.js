import { api } from 'api';
import * as EP from './endpoint';

export const join = {
  submit: async req => {
    const res = await api.post(EP.JOIN, req);
    return res.data;
  },
  nickname: async req => {
    const res = await api.head(EP.CHECK_NICKNAME(req));
    return res.data;
  },
  email: async req => {
    const res = await api.head(EP.CHECK_EMAIL(req));
    return res.data;
  },
  sendCode: async req => {
    const res = await api.post(EP.SEND_CODE, req);
    return res.data;
  },
  verifyCode: async req => {
    const res = await api.head(
      EP.VERIFY_CODE(req.verified_code, req.phone_number)
    );
    return res.data;
  }
};
