import React from 'react';
import { useLocation } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import { PageHeader, ScrollContainer } from 'components/Common';
import { PostList } from 'components/Feed';
import { category } from 'api/queries/category';
import * as S from './styles';

export const FeedListPage = () => {
  const { state } = useLocation();

  const params = pageParam => {
    return {
      categoryId: state.category_id,
      cursorId: pageParam
    };
  };

  const infiniteResponse = useInfiniteQuery(
    ['feedListByCategory'],
    ({ pageParam = 0 }) => category.getFeedListByCategory(params(pageParam)),
    {
      getNextPageParam: lastPage =>
        lastPage.category_feed_list.length > 0 &&
        lastPage.category_feed_list.slice(-1)[0].feed_id
    }
  );

  return (
    <S.PageContainer>
      <PageHeader backTo="/" title={state.category_name} />
      <ScrollContainer>
        <PostList infiniteResponse={infiniteResponse} />
      </ScrollContainer>
    </S.PageContainer>
  );
};
