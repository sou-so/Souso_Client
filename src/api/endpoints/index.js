// join
export const JOIN = `/users`;
export const CHECK_NICKNAME = nickname =>
  `/users/nickname?nickname=${nickname}`;

export const SEND_CODE = `/users/verification-codes`;
export const VERIFY_CODE = (authCode, phoneNumber) =>
  `/users/verification-codes?authCode=${authCode}&phoneNumber=${phoneNumber}`;

// user
export const MYPROFILE = `/users`;
export const LOGIN = `/users/token`;
export const LOGOUT = `/users/logout`;
export const SIGNOUT = `/users/leave`;

// category
export const CATEGORY = `/categories`;
