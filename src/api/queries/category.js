import { api } from 'api';
import { CATEGORY } from 'api/endpoints';

export const category = {
  getList: async () => {
    const res = await api.get(CATEGORY);
    return res.data;
  }
};
