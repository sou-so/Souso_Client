import { api } from 'api';
import { CATEGORY } from 'api/endpoints';

export const category = {
  getList: () => api.get(CATEGORY)
};
