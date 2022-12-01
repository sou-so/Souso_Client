import React from 'react';
import { useMutation } from 'react-query';
import { ThumbTop } from 'components/Post';
import { EditDeleteButton, FetchObserver } from 'components/Common';
import { feed } from 'api/queries/feed';
import * as S from './styles';

export const MyPosts = ({ infiniteResponse }) => {
  const { data, isLoading, isFetching, fetchNextPage } = infiniteResponse;

  const { mutate: remove } = useMutation(feed.remove, {
    onSuccess: res => {
      console.log(res);
      alert('게시글 삭제 완료 🎉');
    },
    onError: error => {
      console.log(error.message);
      alert('게시글 삭제에 실패했습니다. 다시 시도해주세요.');
    }
  });

  return (
    <S.ListContainer>
      {!isLoading &&
        data.pages.map(page =>
          page.feed_list.map(post => (
            <ThumbTop key={post.feed_id} postData={post}>
              <EditDeleteButton handleDelete={() => remove(post.feed_id)} />
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
