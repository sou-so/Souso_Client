import React from 'react';
import { useLocation } from 'react-router-dom';
import { ThumbBottom, ThumbRight } from 'components/Post';
import { useObserver } from 'hooks/useObserver';
import loading from 'assets/images/loading.gif';
import * as S from './styles';

export const PostList = ({ infiniteResponse, active, handleTabClick }) => {
  const { data, isLoading, isFetching, fetchNextPage, refetch } =
    infiniteResponse;
  const { pathname } = useLocation();
  const isMain = pathname === '/';

  const { ObserverComponent } = useObserver(data, fetchNextPage);

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
                page.feed_list.map(post => (
                  <ThumbRight key={post.feed_id} postData={post} />
                ))
              )
            : data.pages.map(page =>
                page.feed_list.map(post => (
                  <ThumbBottom
                    key={post.feed_id}
                    postData={post}
                    refetch={refetch}
                  />
                ))
              ))}
      </S.PostLists>

      {/* 스크롤이 Observer에 도착하면 다음 페이지 fetch */}
      <ObserverComponent />
      {isFetching && (
        <S.Loading onClick={fetchNextPage}>
          <img src={loading} alt="loading" />
        </S.Loading>
      )}
    </S.PostListContainer>
  );
};
