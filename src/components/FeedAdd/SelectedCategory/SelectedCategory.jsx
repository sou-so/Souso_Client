import React from 'react';
import { Icon } from 'components/Common';
import { ReactComponent as Question } from 'assets/icons/question_mark.svg';
import * as S from './styles';

export const SelectedCategory = ({ setToggleSelect, currentCategory }) => {
  return (
    <S.CategoryBox
      className={`${
        (currentCategory === '카테고리 선택' && 'onSelecting') ||
        (currentCategory !== '카테고리 선택' && 'onSelected')
      }`}
    >
      <S.CategoryImg onClick={setToggleSelect}>
        {currentCategory === '카테고리 선택' ? (
          <Icon Icon={Question} size={18} color={'#fff'} />
        ) : null}
      </S.CategoryImg>

      <S.CategoryNameBtn onClick={setToggleSelect}>
        {currentCategory}
      </S.CategoryNameBtn>
    </S.CategoryBox>
  );
};
