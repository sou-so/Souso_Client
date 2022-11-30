import React from 'react';
import { ThumbTop } from 'components/Post';
import { EditDeleteButton } from '..';
import * as S from './styles';
import { FetchObserver } from 'components/Common';

export const MyPosts = ({ infiniteResponse }) => {
  const { data, isLoading, isFetching, fetchNextPage } = infiniteResponse;

  return (
    <S.ListContainer>
      {!isLoading &&
        data.pages.map(page =>
          page.feed_list.map(post => (
            <ThumbTop key={post.feed_id} postData={post}>
              <EditDeleteButton />
            </ThumbTop>
          ))
        )}

      <FetchObserver
        data={data}
        fetchNextPage={fetchNextPage}
        isFetching={isFetching}
      />
    </S.ListContainer>
  );
};
