export const CATEGORY = `/categories`;
export const FEED_LIST_BY_CATEGORY = (categoryId, cursorId) =>
  `/categories/${categoryId || '1'}?cursorId=${cursorId || '0'}`;
