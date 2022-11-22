// join
export const JOIN_API = `/users`;
export const CHECK_NICKNAME_API = nickname =>
  `/users/nickname?nickname=${nickname}`;

// 인증번호 전송 endpoint = '/users/verification-codes'
// 코드인증확인 endpoint = '/users/verification-codes?authCode=${authCode}&phoneNumber=${phoneNumber}"'

// user
export const LOGIN_API = `/users/token`;
export const LOGOUT_API = `/users/logout`;

// category
export const CATEGORY_API = `/categories`;
