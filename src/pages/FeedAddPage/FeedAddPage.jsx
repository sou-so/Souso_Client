import React from 'react';
import { PageHeader } from 'components/Common';
import * as S from './styles';

export const FeedAddPage = () => {
  return (
    <S.PageContainer>
      <PageHeader backTo="/" title={'게시글 작성'} />
    </S.PageContainer>
  );
};
