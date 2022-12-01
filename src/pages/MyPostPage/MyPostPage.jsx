import React, { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { PageHeader, ScrollContainer, MenuTab } from 'components/Common';
import { MyComments, SearchButton, MyPosts } from 'components/MySubPage';
import { user } from 'api/queries/user';
import * as S from './styles';

export const MyPostPage = () => {
  const list = ['게시글', '댓글'];
  const [active, setActive] = useState(list[0]);

  const postInfiniteResponse = useInfiniteQuery(
    ['myPosts'],
    ({ pageParam = 0 }) => user.myPosts({ cursorId: pageParam }),
    {
      getNextPageParam: lastPage =>
        lastPage.feed_list.length > 0 && lastPage.feed_list.slice(-1)[0].feed_id
    }
  );

  const commentInfiniteResponse = '';

  return (
    <S.PageContainer>
      <PageHeader title="나의 글" backTo="/mypage" />
      <SearchButton />
      <MenuTab list={list} active={active} setActive={setActive} />
      <ScrollContainer>
        {active === '게시글' ? (
          <MyPosts infiniteResponse={postInfiniteResponse} />
        ) : (
          <MyComments />
        )}
      </ScrollContainer>
    </S.PageContainer>
  );
};
