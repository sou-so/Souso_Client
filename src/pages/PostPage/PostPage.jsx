import React from 'react';
import { PageHeader } from 'components/Common';
import * as S from './styles';
import * as C from 'components/Post';
import postData from 'data/posts';

export const PostPage = () => {
  return (
    <S.PageContainer>
      <PageHeader backTo="/" title="카테고리" />
      <S.ViewContainer postData={postData}>
        <C.WriterBanner />
        <C.PostContents />
        <C.PostButton />
      </S.ViewContainer>
    </S.PageContainer>
  );
};
