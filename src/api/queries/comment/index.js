import { apiWithToken } from 'api';
import * as EP from './endpoint';

export const comments = {
  add: async req => {
    console.log(req);
    const res = await apiWithToken.post(EP.ADD_COMMENTS(req[0].feedId), req[1]);
    return res.data;
  },
  reply: async req => {
    const res = await apiWithToken.post(EP.ADD_REPLY(req), req);
    return res.data;
  },
  list: async ({ queryKey }) => {
    const { feedId, pageId } = queryKey[1];
    const res = await apiWithToken.get(EP.GET_COMMENTS_LIST(feedId, pageId));
    return res.data;
  },
  delete: async req => {
    const res = await apiWithToken.delete(EP.DELETE_COMMENT(req));
    return res;
  }
};
