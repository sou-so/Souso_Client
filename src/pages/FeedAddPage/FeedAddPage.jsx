import React, { useState } from 'react';
// import { useQuery } from 'react-query';
// import { category } from 'utils/api/categoryAPI';
import { PageHeader, ScrollContainer } from 'components/Common';
import { FeedForm, SelectedCategory } from 'components/FeedAdd';
import * as S from './styles';
import { CategorySelect } from 'components/FeedAdd/CategorySelect/CategorySelect';

export const FeedAddPage = () => {
  const [toggleSelect, setToggleSelect] = useState(true);
  const [currentCategory, SetCurrentCategory] = useState('카테고리 선택');

  const testList = [
    '동네질문',
    '동네소식',
    '취미생활',
    '동네맛집',
    '일상',
    '분실센터',
    '해주세요',
    '사건사고',
    '메뉴1',
    '메뉴2',
    '메뉴3',
    '메뉴4',
    '메뉴5',
    '메뉴6'
  ];

  // const { categoryData } = useQuery('category', category.getList);
  // console.log(categoryData);

  return (
    <S.PageContainer>
      <PageHeader backTo="/" title={'게시글 작성'} />

      {toggleSelect && (
        <CategorySelect
          testList={testList}
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
