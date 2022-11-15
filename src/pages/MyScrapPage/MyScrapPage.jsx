import React from 'react';
import { PageHeader, ScrollContainer } from 'components/Common';
import { MenuTab, SearchButton } from 'components/MySubPage';
import { ThumbTop } from 'components/Post';
import posts from 'data/posts';
import * as S from './styles';

export const MyScrapPage = () => {
  const list = ['전체', '동네생활', '소소맛집'];

  return (
    <S.PageContainer>
      <PageHeader title="보관함" backTo="/mypage" />
      <SearchButton />
      <MenuTab list={list} />
      <ScrollContainer>
        {posts.popular.map(post => (
          <ThumbTop key={post.id} postData={post} />
        ))}
      </ScrollContainer>
    </S.PageContainer>
  );
};
