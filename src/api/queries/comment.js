import { apiWithToken } from 'api';
import { ADD_COMMENTS, ADD_REPLY, GET_COMMENTS_LIST } from 'api/endpoints';

export const comments = {
  add: async req => {
    console.log(req);
    const res = await apiWithToken.post(ADD_COMMENTS(req[0].feedId), req[1]);
    return res.data;
  },
  reply: async req => {
    const res = await apiWithToken.post(ADD_REPLY(req), req);
    return res.data;
  },
  list: async ({ queryKey }) => {
    const { feedId, pageId } = queryKey[1];
    const res = await apiWithToken.get(GET_COMMENTS_LIST(feedId, pageId));
    return res.data;
  }
};
