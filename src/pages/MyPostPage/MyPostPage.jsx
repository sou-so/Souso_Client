import React from 'react';
import { PageHeader, ScrollContainer } from 'components/Common';
import { MenuTab, SearchButton } from 'components/MySubPage';
import { ThumbTop } from 'components/Post';
import posts from 'data/posts';
import * as S from './styles';

export const MyPostPage = () => {
  const list = ['게시글', '댓글'];

  return (
    <S.PageContainer>
      <PageHeader title="나의 글" backTo="/mypage" />
      <SearchButton />
      <MenuTab list={list} />
      <ScrollContainer>
        {posts.popular.map(post => (
          <ThumbTop key={post.id} postData={post} myPost />
        ))}
      </ScrollContainer>
    </S.PageContainer>
  );
};
