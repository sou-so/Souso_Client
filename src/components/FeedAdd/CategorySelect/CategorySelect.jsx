import React from 'react';
import { Category } from 'components/Common';
import { SelectedCategory } from 'components/FeedAdd';
import * as S from './styles';

export const CategorySelect = ({ setToggleSelect, category, setCategory }) => {
  const handleSelect = e => {
    const curretId = e.target.parentElement.id;
    const currentName = e.target.innerText;

    if (currentName !== category) {
      setCategory({ id: curretId, name: currentName });
    }

    setToggleSelect(prev => !prev);
  };

  return (
    <S.SelectingView>
      <SelectedCategory setToggleSelect={setToggleSelect} category={category} />
      <S.CategoryList>
        <Category onClick={handleSelect} />
      </S.CategoryList>
    </S.SelectingView>
  );
};
