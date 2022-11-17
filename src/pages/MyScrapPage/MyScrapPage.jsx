import React, { useState } from 'react';
import { PageHeader, ScrollContainer } from 'components/Common';
import { MenuTab, SearchButton } from 'components/MySubPage';
import { ThumbTop } from 'components/Post';
import posts from 'data/posts';
import * as S from './styles';

export const MyScrapPage = () => {
  const list = ['전체', '동네생활', '소소맛집'];
  const [active, setActive] = useState(list[0]);

  return (
    <S.PageContainer>
      <PageHeader title="보관함" backTo="/mypage" />
      <SearchButton />
      <MenuTab list={list} active={active} setActive={setActive} />
      <ScrollContainer>
        <S.ScrapList>
          {posts.popular.map(post => (
            <ThumbTop key={post.id} postData={post} />
          ))}
        </S.ScrapList>
      </ScrollContainer>
    </S.PageContainer>
  );
};
