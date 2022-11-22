import axios from 'axios';
import { CATEGORY_API } from './_ep';

export const getCategory = async () => {
  const res = await axios.get(CATEGORY_API);
  return res.data;
};
