import React, { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { PageHeader, ScrollContainer } from 'components/Common';
import { CategoryTab, MyBookmarks, SearchButton } from 'components/MySubPage';
import { user } from 'api/queries/user';
import * as S from './styles';

export const MyBookmarkPage = () => {
  const [active, setActive] = useState(0);

  const params = pageParam => {
    return {
      categoryId: active,
      pageId: pageParam
    };
  };

  const infiniteResponse = useInfiniteQuery(
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
      <CategoryTab
        active={active}
        setActive={setActive}
        refetch={infiniteResponse.refetch}
      />
      <ScrollContainer>
        <MyBookmarks infiniteResponse={infiniteResponse} />
      </ScrollContainer>
    </S.PageContainer>
  );
};
