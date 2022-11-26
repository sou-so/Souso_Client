import React, { useState } from 'react';
import { PageHeader, ScrollContainer } from 'components/Common';
import { FeedForm, SelectedCategory, CategorySelect } from 'components/FeedAdd';
import * as S from './styles';

export const FeedAddPage = () => {
  const [toggleSelect, setToggleSelect] = useState(true);
  const [currentCategory, setCurrentCategory] = useState('카테고리 선택');

  return (
    <S.PageContainer>
      <PageHeader backTo="/" title={'게시글 작성'} />

      {toggleSelect && (
        <CategorySelect
          setToggleSelect={setToggleSelect}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
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
