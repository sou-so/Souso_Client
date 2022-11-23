import React from 'react';
import { SelectedCategory } from 'components/FeedAdd';
import { Icon } from 'components/Common';
import { ReactComponent as Temp } from 'assets/icons/temp.svg';
import * as S from './styles';

export const CategorySelect = ({
  testList,
  setToggleSelect,
  currentCategory,
  SetCurrentCategory
}) => {
  const handleSelect = category => {
    if (category !== currentCategory) {
      SetCurrentCategory(category);
    }
    setToggleSelect(prev => !prev);
  };

  return (
    <S.SelectBanner>
      <SelectedCategory
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
  );
};
