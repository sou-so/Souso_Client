import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { category } from 'api/queries/category';
import { PageHeader, ScrollContainer } from 'components/Common';
import { FeedForm, SelectedCategory } from 'components/FeedAdd';
import * as S from './styles';
import { CategorySelect } from 'components/FeedAdd/CategorySelect/CategorySelect';

export const FeedAddPage = () => {
  const [toggleSelect, setToggleSelect] = useState(true);
  const [currentCategory, SetCurrentCategory] = useState('카테고리 선택');

  const { data } = useQuery(['category'], category.getList);

  return (
    <S.PageContainer>
      <PageHeader backTo="/" title={'게시글 작성'} />

      {toggleSelect && (
        <CategorySelect
          data={data}
          setToggleSelect={setToggleSelect}
          currentCategory={currentCategory}
          SetCurrentCategory={SetCurrentCategory}
        />
      )}

      <ScrollContainer>
        <SelectedCategory
          setToggleSelect={setToggleSelect}
          currentCategory={currentCategory}
        />
        <FeedForm currentCategory={currentCategory} />
      </ScrollContainer>
    </S.PageContainer>
  );
};
