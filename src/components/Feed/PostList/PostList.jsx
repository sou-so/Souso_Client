import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  EmptyList,
  FetchObserver,
  SkeletonThBottom,
  SkeletonThRight
} from 'components/Common';
import { ThumbBottom, ThumbRight } from 'components/Post';
import * as S from './styles';

export const PostList = ({ infiniteResponse, active, handleTabClick }) => {
  const { data, isLoading, isFetching, fetchNextPage, refetch } =
    infiniteResponse;
  const { pathname } = useLocation();
  const isMain = pathname === '/';

  const isEmpty =
    !isLoading &&
    ('feed_list' in data.pages[0]
      ? !data.pages[0].feed_list.length
      : !data.pages[0].category_feed_list.length);

  if (isEmpty) return <EmptyList message="조회된 게시글이 없어요" />;

  return (
    <S.PostListContainer>
      {isMain && (
        <S.Tabs>
          {['인기글', '최신글'].map((name, i) => (
            <S.TabButton
              key={i}
              id={name}
              onClick={handleTabClick}
              className={name === active ? 'active' : ''}
            >
              {name}
            </S.TabButton>
          ))}
        </S.Tabs>
      )}

      {active === '인기글' &&
        (isFetching ? (
          <SkeletonThRight />
        ) : (
          <S.PostLists>
            {data.pages.map(page =>
              (page.feed_list || page.category_feed_list).map(post => (
                <ThumbRight key={post.feed_id} postData={post} />
              ))
            )}
          </S.PostLists>
        ))}

      {/* 메인 최신글 & 카테고리별 피드 목록 */}
      {active !== '인기글' &&
        (isFetching ? (
          <SkeletonThBottom />
        ) : (
          <S.PostLists>
            {data.pages.map(page =>
              (page.feed_list || page.category_feed_list).map(post => (
                <ThumbBottom
                  key={post.feed_id}
                  postData={post}
                  refetch={refetch}
                />
              ))
            )}
          </S.PostLists>
        ))}

      <FetchObserver
        data={data}
        fetchNextPage={fetchNextPage}
        isFetching={isFetching}
      />
    </S.PostListContainer>
  );
};
