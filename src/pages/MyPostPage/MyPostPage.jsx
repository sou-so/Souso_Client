import React, { useState } from 'react';
import { PageHeader, ScrollContainer } from 'components/Common';
import {
  MyComments,
  MenuTab,
  SearchButton,
  MyPosts
} from 'components/MySubPage';
import * as S from './styles';

export const MyPostPage = () => {
  const list = ['게시글', '댓글'];
  const [active, setActive] = useState(list[0]);

  return (
    <S.PageContainer>
      <PageHeader title="나의 글" backTo="/mypage" />
      <SearchButton />
      <MenuTab list={list} active={active} setActive={setActive} />
      <ScrollContainer>
        {active === '게시글' ? <MyPosts /> : <MyComments />}
      </ScrollContainer>
    </S.PageContainer>
  );
};
