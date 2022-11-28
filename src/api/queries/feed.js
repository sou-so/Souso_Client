import { apiWithToken } from 'api';
import { ADD_FEED, GET_FEED_LIST, BOOKMARK } from 'api/endpoints';

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
  addBookmark: async req => {
    const res = await apiWithToken.post(BOOKMARK(req), req);
    return res.data;
  },
  removeBookmark: async req => {
    const res = await apiWithToken.delete(BOOKMARK(req));
    return res;
  }
};
