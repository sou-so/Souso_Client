import React, { useState } from 'react';
// import { useQuery } from 'react-query';
// import { category } from 'utils/api/categoryAPI';
import { Icon, PageHeader, ScrollContainer } from 'components/Common';
import { ContentsBox, SelectedCategory } from 'components/FeedAdd';
import { ReactComponent as Temp } from 'assets/icons/temp.svg';
import * as S from './styles';

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

  const handleSelect = category => {
    if (category !== currentCategory) {
      SetCurrentCategory(category);
    }
    setToggleSelect(prev => !prev);
  };

  return (
    <S.PageContainer>
      <PageHeader backTo="/" title={'게시글 작성'} />

      {toggleSelect && (
        <S.SelectBanner>
          <SelectedCategory
            selecting={toggleSelect}
            setToggleSelect={setToggleSelect}
            currentCategory={currentCategory}
          />
          <S.CategoryList>
            {testList &&
              testList.map((category, i) => (
                <li key={i} onClick={() => handleSelect(category)}>
                  <Icon Icon={Temp} />
                  <p>{category}</p>
                </li>
              ))}
          </S.CategoryList>
        </S.SelectBanner>
      )}

      <ScrollContainer>
        <SelectedCategory
          selecting={toggleSelect}
          setToggleSelect={setToggleSelect}
          currentCategory={currentCategory}
        />
        <ContentsBox />
      </ScrollContainer>
    </S.PageContainer>
  );
};
