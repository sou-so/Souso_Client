import React, { useState } from 'react';

import { useInfiniteQuery } from 'react-query';
import { feed } from 'api/queries/feed';

import { Category, ScrollContainer } from 'components/Common';
import { PostList } from 'components/Feed';
import * as C from 'components/CommonMain';
import * as S from './styles';

export const FeedPage = () => {
  const [active, setActive] = useState('최신글');
  const isLatest = active === '최신글';

  const params = pageParam => {
    return {
      cursorId: isLatest ? pageParam : 0,
      pageId: !isLatest ? pageParam : 0,
      sortType: isLatest ? 'LATEST' : 'POPULAR'
    };
  };

  const infiniteResponse = useInfiniteQuery(
    ['feed'],
    ({ pageParam = 0 }) => feed.list(params(pageParam)),
    {
      getNextPageParam: lastPage =>
        isLatest
          ? lastPage.feed_list.length > 0 &&
            lastPage.feed_list.slice(-1)[0].feed_id
          : lastPage.page_id + 1
    }
  );

  const handleTabClick = async e => {
    await setActive(e.target.id);
    infiniteResponse.refetch();
  };

  return (
    <S.PageContainer>
      <C.MainHeader />
      <ScrollContainer>
        <S.SectionWrap>
          <C.MainBanner text={['소소한 얘기를 소소가', '기다리고 있어요.']} />
          <C.SearchBar placeholder="동네의 궁금한 점을 검색하세요." />
          <C.HashTags />
        </S.SectionWrap>

        <S.CategoryWrap>
          <h3>어떤 이야기가 듣고 싶으세요?</h3>
          <Category more linkTo />
        </S.CategoryWrap>

        <PostList
          active={active}
          handleTabClick={handleTabClick}
          infiniteResponse={infiniteResponse}
        />
      </ScrollContainer>

      <C.AddButton />
    </S.PageContainer>
  );
};
