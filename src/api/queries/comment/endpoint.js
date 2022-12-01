export const ADD_COMMENTS = feedId => `/comments/${feedId}`;
export const ADD_REPLY = commentId => `/comments/reply/${commentId}`;
export const GET_COMMENTS_LIST = (feedId, pageId) =>
  `/comments/${feedId}?pageId=${pageId}`;
export const DELETE_COMMENT = commentId => `/comments/${commentId}`;
