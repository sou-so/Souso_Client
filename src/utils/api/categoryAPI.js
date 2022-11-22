import { api } from './_axios';
import { CATEGORY_API } from './_ep';

export const category = {
  getList: () => api.get(CATEGORY_API)
};
