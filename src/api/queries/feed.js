import { apiWithToken } from 'api';
import {
  ADD_FEED,
  GET_FEED_LIST,
  GET_FEED_DETAIL,
  BOOKMARK,
  LIKE
} from 'api/endpoints';

export const feed = {
  add: async data => {
    const res = await apiWithToken.post(ADD_FEED, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  },
  list: async ({ cursorId, pageId, sortType }) => {
    const res = await apiWithToken.get(
      GET_FEED_LIST(cursorId, pageId, sortType)
    );
    return res.data;
  },
  detail: async ({ queryKey }) => {
    const feedId = queryKey[1];
    const res = await apiWithToken.get(GET_FEED_DETAIL(feedId));
    return res.data;
  },
  addBookmark: async req => {
    const res = await apiWithToken.post(BOOKMARK(req), req);
    return res.data;
  },
  removeBookmark: async req => {
    const res = await apiWithToken.delete(BOOKMARK(req));
    return res;
  },
  addLike: async req => {
    const res = await apiWithToken.post(LIKE(req), req);
    return res.data;
  },
  removeLike: async req => {
    const res = await apiWithToken.delete(LIKE(req));
    return res;
  }
};
