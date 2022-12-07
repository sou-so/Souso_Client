export const MYPROFILE = `/users`;
export const LOGIN = `/users/token`;
export const LOGOUT = `/users/logout`;
export const SIGNOUT = `/users/leave`;
export const EDIT_TOWN = `/users/location`;
export const MYPOSTS = cursorId => `/users/feeds?cursorId=${cursorId}`;
export const MYBOOKMARKS = (categoryId, pageId) =>
  `/users/bookmarks?categoryId=${categoryId || '0'}&pageId=${pageId || '0'}`;
