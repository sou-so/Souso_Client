export const JOIN = `/users`;
export const CHECK_NICKNAME = nickname =>
  `/users/nickname?nickname=${nickname}`;

export const CHECK_EMAIL = email => `/users/email?email=${email}%40${email}`;

export const SEND_CODE = `/users/verification-codes`;
export const VERIFY_CODE = (authCode, phoneNumber) =>
  `/users/verification-codes?authCode=${authCode}&phoneNumber=${phoneNumber}`;
