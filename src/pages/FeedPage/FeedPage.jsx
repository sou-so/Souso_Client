import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Category, ScrollContainer } from 'components/Common';
import { useInfiniteQuery } from 'react-query';
import { feed } from 'api/queries/feed';
import * as C from 'components/Feed';
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
      <C.FeedHeader />
      <ScrollContainer>
        <S.SectionWrap>
          <C.FeedBanner />
          <C.SearchBar />
          <C.HashTags />
        </S.SectionWrap>

        <S.CategoryWrap>
          <h3>어떤 이야기가 듣고 싶으세요?</h3>
          <Category more linkTo />
        </S.CategoryWrap>

        <C.PostList
          active={active}
          handleTabClick={handleTabClick}
          infiniteResponse={infiniteResponse}
        />
      </ScrollContainer>

      <C.FeedAddButton />

      {/* <S.TempLinks>
        <Link to={'/login'}>
          <div>Login</div>
        </Link>
        <Link to={'/join'}>
          <div>Join</div>
        </Link>
      </S.TempLinks> */}
    </S.PageContainer>
  );
};
