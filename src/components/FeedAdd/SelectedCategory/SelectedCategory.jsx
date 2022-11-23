import React from 'react';
import { Icon } from 'components/Common';
import { ReactComponent as Question } from 'assets/icons/question_mark.svg';
import * as S from './styles';

export const SelectedCategory = ({ setToggleSelect, currentCategory }) => {
  return (
    <S.CategoryBox>
      <S.CategoryImg
        className={`${
          (currentCategory === '카테고리 선택' && 'onSelecting') ||
          (currentCategory !== '카테고리 선택' && 'onSelected')
        }`}
      >
        {currentCategory === '카테고리 선택' ? (
          <Icon Icon={Question} size={18} color={'#fff'} />
        ) : null}
      </S.CategoryImg>

      <S.CategoryNameBtn
        onClick={setToggleSelect}
        className={`${currentCategory === '카테고리 선택' && 'onSelecting'}`}
      >
        {currentCategory}
      </S.CategoryNameBtn>
    </S.CategoryBox>
  );
};
