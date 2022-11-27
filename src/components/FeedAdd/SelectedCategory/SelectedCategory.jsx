import React from 'react';
import { Icon } from 'components/Common';
import { ReactComponent as Question } from 'assets/icons/question_mark.svg';
import * as S from './styles';

export const SelectedCategory = ({ toggleModal, category }) => {
  return (
    <S.CategoryBox
      className={`${category.name ? 'onSelected' : 'onSelecting'}`}
    >
      <S.CategoryImg onClick={toggleModal}>
        {/* null값에는 차후 추가될 카테고리 Icon 추가 예정 */}
        {!category.name ? (
          <Icon Icon={Question} size={18} color="#fff" />
        ) : null}
      </S.CategoryImg>

      <S.CategoryNameBtn type="button" onClick={toggleModal}>
        {category.name || '카테고리 선택'}
      </S.CategoryNameBtn>
    </S.CategoryBox>
  );
};
