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
export const MYPOSTS = cursorId => `/users/feeds?cursorId=${cursorId}`;
export const MYBOOKMARKS = (categoryId, pageId) =>
  `/users/bookmarks?categoryId=${categoryId || '0'}&pageId=${pageId || '0'}`;

// category
export const CATEGORY = `/categories`;
export const FEED_LIST_BY_CATEGORY = (categoryId, cursorId) =>
  `/categories/${categoryId || '1'}?cursorId=${cursorId || '0'}`;

// feed
export const ADD_FEED = `/feeds`;
export const GET_FEED_LIST = (cursorId, pageId, sortType) =>
  `/feeds?cursorId=${cursorId || '0'}&pageId=${pageId || '0'}&sortType=${
    sortType || 'LATEST'
  }`;
export const GET_FEED_DETAIL = feedId => `/feeds/${feedId}`;
export const BOOKMARK = feedId => `/feeds/${feedId}/bookmark`;
export const LIKE = feedId => `feeds/${feedId}/like`;

// comments
export const ADD_COMMENTS = feedId => `/comments/${feedId}`;
export const ADD_REPLY = commentId => `/comments/reply/${commentId}`;
export const GET_COMMENTS_LIST = (feedId, pageId) =>
  `/comments/${feedId}?pageId=${pageId}`;
