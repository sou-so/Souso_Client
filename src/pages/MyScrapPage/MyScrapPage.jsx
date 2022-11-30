import React, { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import {
  PageHeader,
  ScrollContainer,
  MenuTab,
  FetchObserver
} from 'components/Common';
import { SearchButton } from 'components/MySubPage';
import { ThumbTop } from 'components/Post';
import { user } from 'api/queries/user';
import * as S from './styles';

export const MyScrapPage = () => {
  const list = ['전체', '동네생활', '소소맛집'];
  const [active, setActive] = useState(list[0]);

  const params = pageParam => {
    return {
      categoryId: 0,
      pageId: pageParam
    };
  };

  const { data, isLoading, isFetching, fetchNextPage } = useInfiniteQuery(
    ['myBookmarks'],
    ({ pageParam = 0 }) => user.myBookmarks(params(pageParam)),
    {
      getNextPageParam: lastPage => lastPage.page_id + 1
    }
  );

  return (
    <S.PageContainer>
      <PageHeader title="보관함" backTo="/mypage" />
      <SearchButton />
      <MenuTab list={list} active={active} setActive={setActive} />
      <ScrollContainer>
        <S.ScrapList>
          {!isLoading &&
            data.pages.map(page =>
              page.feed_list.map(post => (
                <ThumbTop key={post.feed_id} postData={post} />
              ))
            )}
          <FetchObserver
            data={data}
            fetchNextPage={fetchNextPage}
            isFetching={isFetching}
          />
        </S.ScrapList>
      </ScrollContainer>
    </S.PageContainer>
  );
};
