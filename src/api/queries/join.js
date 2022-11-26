import { api } from 'api';
import { JOIN, CHECK_NICKNAME } from 'api/endpoints';

export const join = {
  submit: data => api.post(JOIN, data),
  nickname: data => api.head(CHECK_NICKNAME(data))
  // sendCode: data => api.post(SEND_CODE, data)
  // verifyCode: data => api.head(VERIFY_CODE, data)
};
