export const ADD_COMMENT = feedId => `/comments/${feedId}`;
export const ADD_REPLY = commentId => `/comments/reply/${commentId}`;
export const GET_COMMENTS_LIST = (feedId, pageId) =>
  `/comments/${feedId}?pageId=${pageId}`;
export const EDIT_COMMENT = commentId => `/comments/${commentId}`;
export const DELETE_COMMENT = commentId => `/comments/${commentId}`;
