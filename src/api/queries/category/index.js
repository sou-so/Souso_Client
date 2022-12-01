import { api, apiWithToken } from 'api';
import * as EP from './endpoint';

export const category = {
  getList: async () => {
    const res = await api.get(EP.CATEGORY);
    return res.data;
  },
  getFeedListByCategory: async ({ categoryId, cursorId }) => {
    const res = await apiWithToken.get(
      EP.FEED_LIST_BY_CATEGORY(categoryId, cursorId)
    );
    return res.data;
  }
};
