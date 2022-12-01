import React from 'react';
import { useLocation } from 'react-router-dom';
import { FetchObserver } from 'components/Common';
import { ThumbBottom, ThumbRight } from 'components/Post';
import * as S from './styles';

export const PostList = ({ infiniteResponse, active, handleTabClick }) => {
  const { data, isLoading, isFetching, fetchNextPage, refetch } =
    infiniteResponse;
  const { pathname } = useLocation();
  const isMain = pathname === '/feed';

  return (
    <S.PostListContainer>
      {isMain && (
        <S.Tabs>
          {['인기글', '최신글'].map((name, i) => (
            <button
              key={i}
              id={name}
              onClick={handleTabClick}
              className={name === active ? 'active' : ''}
            >
              {name}
            </button>
          ))}
        </S.Tabs>
      )}

      <S.PostLists>
        {!isLoading &&
          (active === '인기글'
            ? data.pages.map(page =>
                (page.feed_list || page.category_feed_list).map(post => (
                  <ThumbRight key={post.feed_id} postData={post} />
                ))
              )
            : data.pages.map(page =>
                (page.feed_list || page.category_feed_list).map(post => (
                  <ThumbBottom
                    key={post.feed_id}
                    postData={post}
                    refetch={refetch}
                  />
                ))
              ))}
      </S.PostLists>

      <FetchObserver
        data={data}
        fetchNextPage={fetchNextPage}
        isFetching={isFetching}
      />
    </S.PostListContainer>
  );
};
