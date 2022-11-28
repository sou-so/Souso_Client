import React from 'react';
import { useLocation } from 'react-router-dom';
import { PageHeader, ScrollContainer } from 'components/Common';
import { PostList } from 'components/Feed';
import * as S from './styles';

export const FeedListPage = () => {
  const { state } = useLocation();

  return (
    <S.PageContainer>
      <PageHeader backTo="/" title={state.category_name} />
      <ScrollContainer>
        <PostList />
      </ScrollContainer>
    </S.PageContainer>
  );
};
