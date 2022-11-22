import React from 'react';
import { PageHeader, ScrollContainer } from 'components/Common';
import { ContentsBox, SelectedCategory } from 'components/FeedAdd';
import * as S from './styles';

export const FeedAddPage = () => {
  return (
    <S.PageContainer>
      <PageHeader backTo="/" title={'게시글 작성'} />
      <ScrollContainer>
        <SelectedCategory />
        <ContentsBox />
      </ScrollContainer>
    </S.PageContainer>
  );
};
