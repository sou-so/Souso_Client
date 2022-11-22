import { api } from './_axios';
import { JOIN_API, CHECK_NICKNAME_API } from './_ep';

export const join = {
  submit: data => api.post(JOIN_API, data),
  nickname: data => api.head(CHECK_NICKNAME_API(data))
  // sendCode: data => api.post(SEND_CODE_API, data)
  // verifyCode: data => api.head(VERIFY_CODE_API, data)
};
