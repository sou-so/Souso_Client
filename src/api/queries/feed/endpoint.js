export const ADD_FEED = `/feeds`;
export const FEED_ITEM = feedId => `/feeds/${feedId}`;
export const GET_FEED_LIST = (cursorId, pageId, sortType) =>
  `/feeds?cursorId=${cursorId || '0'}&pageId=${pageId || '0'}&sortType=${
    sortType || 'LATEST'
  }`;
export const BOOKMARK = feedId => `/feeds/${feedId}/bookmark`;
export const LIKE = feedId => `feeds/${feedId}/like`;
