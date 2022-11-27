// join
export const JOIN = `/users`;
export const CHECK_NICKNAME = nickname =>
  `/users/nickname?nickname=${nickname}`;

// 인증번호 전송 endpoint = '/users/verification-codes'
// 코드인증확인 endpoint = '/users/verification-codes?authCode=${authCode}&phoneNumber=${phoneNumber}"'

// user
export const MYPROFILE = `/users`;
export const LOGIN = `/users/token`;
export const LOGOUT = `/users/logout`;
export const SIGNOUT = `/users/leave`;

// category
export const CATEGORY = `/categories`;

// feed
export const ADD_FEED = `/feeds`;
export const GET_FEED_LIST = (cursorId, sortType) =>
  `/feeds?cursorId=${cursorId || '0'}&sortType=${sortType || 'LATEST'}`;
