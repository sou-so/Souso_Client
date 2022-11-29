import { api, apiWithToken } from 'api';
import { CATEGORY, FEED_LIST_BY_CATEGORY } from 'api/endpoints';

export const category = {
  getList: async () => {
    const res = await api.get(CATEGORY);
    return res.data;
  },
  getFeedListByCategory: async ({ categoryId, cursorId }) => {
    const res = await apiWithToken.get(
      FEED_LIST_BY_CATEGORY(categoryId, cursorId)
    );
    return res.data;
  }
};
