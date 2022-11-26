import React from 'react';
import { SelectedCategory } from 'components/FeedAdd';
import { Icon } from 'components/Common';
import { ReactComponent as Temp } from 'assets/icons/temp.svg';
import * as S from './styles';

export const CategorySelect = ({
  data,
  setToggleSelect,
  currentCategory,
  SetCurrentCategory
}) => {
  const categoryList = data.data.category_list;

  const handleSelect = category => {
    if (category !== currentCategory) {
      SetCurrentCategory(category);
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
        {categoryList &&
          categoryList.map((data, i) => (
            <li key={i} onClick={() => handleSelect(data.category_name)}>
              <Icon Icon={Temp} />
              <p>{data.category_name}</p>
            </li>
          ))}
      </S.CategoryList>
    </S.SelectingView>
  );
};
