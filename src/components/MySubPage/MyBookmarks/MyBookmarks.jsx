import React from 'react';
import { EmptyList, FetchObserver } from 'components/Common';
import { ThumbTop } from 'components/Post';
import * as S from './styles';

export const MyBookmarks = ({ infiniteResponse }) => {
  const { data, isLoading, isFetching, fetchNextPage } = infiniteResponse;

  const isEmpty = !isLoading && !data.pages[0].feed_list.length;

  if (isEmpty) return <EmptyList message="보관함이 비어있어요" />;

  return (
    <S.BookmarkList>
      {!isLoading &&
        data.pages.map(page =>
          page.feed_list.map(post => (
            <ThumbTop key={post.feed_id} postData={post} />
          ))
        )}
      <FetchObserver
        data={data}
        fetchNextPage={fetchNextPage}
        isFetching={isFetching}
      />
    </S.BookmarkList>
  );
};
