export const BASE_URL = 'http://43.201.133.197:8080';

// join
export const JOIN_API = `${BASE_URL}/users`;
export const CHECK_NICKNAME_API = nickname =>
  `${BASE_URL}/users/nickname?nickname=${nickname}`;

// 인증번호 전송 endpoint = '/users/verification-codes'
// 코드인증확인 endpoint = '/users/verification-codes?authCode=${authCode}&phoneNumber=${phoneNumber}"'

// user
export const LOGIN_API = `${BASE_URL}/users/token`;
export const LOGOUT_API = `${BASE_URL}/users/logout`;

// category
export const CATEGORY_API = `${BASE_URL}/categories`;
