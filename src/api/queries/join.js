import { api } from 'api';
import { JOIN, CHECK_NICKNAME, SEND_CODE, VERIFY_CODE } from 'api/endpoints';

export const join = {
  submit: async req => {
    const res = await api.post(JOIN, req);
    return res.data;
  },
  nickname: async req => {
    const res = await api.head(CHECK_NICKNAME(req));
    return res.data;
  },
  sendCode: async req => {
    const res = await api.post(SEND_CODE, req);
    return res.data;
  },
  verifyCode: async req => {
    const res = await api.head(
      VERIFY_CODE(req.verified_code, req.phone_number)
    );
    return res.data;
  }
};
