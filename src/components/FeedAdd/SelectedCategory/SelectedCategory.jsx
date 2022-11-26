import React from 'react';
import { Icon } from 'components/Common';
import { ReactComponent as Question } from 'assets/icons/question_mark.svg';
import * as S from './styles';

export const SelectedCategory = ({ setToggleSelect, category }) => {
  return (
    <S.CategoryBox
      className={`${category.name ? 'onSelected' : 'onSelecting'}`}
    >
      <S.CategoryImg onClick={setToggleSelect}>
        {!category.name && <Icon Icon={Question} size={18} color="#fff" />}
      </S.CategoryImg>

      <S.CategoryNameBtn onClick={setToggleSelect}>
        {category.name || '카테고리 선택'}
      </S.CategoryNameBtn>
    </S.CategoryBox>
  );
};
