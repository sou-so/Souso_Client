import React from 'react';
import { PageHeader } from 'components/Common';
import { ContentsBox, SelectedCategory } from 'components/FeedAdd';
import * as S from './styles';

export const FeedAddPage = () => {
  return (
    <>
      <PageHeader backTo="/" title={'게시글 작성'} />
      <S.BodyContainer>
        <SelectedCategory />
        <ContentsBox />
      </S.BodyContainer>
    </>
  );
};
