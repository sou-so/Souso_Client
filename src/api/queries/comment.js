import { apiWithToken } from 'api';
import { GET_COMMENTS_LIST } from 'api/endpoints';

export const comments = {
  list: async ({ queryKey }) => {
    const { feedId, pageId } = queryKey[1];
    const res = await apiWithToken.get(GET_COMMENTS_LIST(feedId, pageId));
    return res.data;
  }
};
