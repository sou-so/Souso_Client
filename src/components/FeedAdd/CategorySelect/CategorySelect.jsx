import React from 'react';
import { Category } from 'components/Common';
import { SelectedCategory } from 'components/FeedAdd';
import * as S from './styles';

export const CategorySelect = ({
  setToggleSelect,
  currentCategory,
  setCurrentCategory
}) => {
  const handleSelect = e => {
    const clicked = e.target.innerText;
    if (clicked !== currentCategory) {
      setCurrentCategory(clicked);
    }
    setToggleSelect(prev => !prev);
  };

  return (
    <S.SelectingView>
      <SelectedCategory
        setToggleSelect={setToggleSelect}
        currentCategory={currentCategory}
      />

      <S.CategoryList>
        <Category onClick={handleSelect} />
      </S.CategoryList>
    </S.SelectingView>
  );
};
