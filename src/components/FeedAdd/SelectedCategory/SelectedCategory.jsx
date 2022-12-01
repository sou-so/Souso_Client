import React from 'react';
import { Icon } from 'components/Common';
import { ReactComponent as Question } from 'assets/icons/question_mark.svg';
import { ReactComponent as QuestionCircle } from 'assets/icons/category/question_circle.svg';
import { ReactComponent as Clock } from 'assets/icons/category/clock.svg';
import { ReactComponent as Bulb } from 'assets/icons/category/bulb.svg';
import { ReactComponent as Map } from 'assets/icons/category/map.svg';
import { ReactComponent as Puzzle } from 'assets/icons/category/puzzle.svg';
import { ReactComponent as Lost } from 'assets/icons/category/lost.svg';
import { ReactComponent as Lightning } from 'assets/icons/category/lightning.svg';
import { ReactComponent as Fire } from 'assets/icons/category/fire.svg';
import * as S from './styles';

export const SelectedCategory = ({ toggleModal, category }) => {
  const svgs = [
    QuestionCircle,
    Clock,
    Bulb,
    Map,
    Puzzle,
    Lost,
    Lightning,
    Fire
  ];

  return (
    <S.CategoryBox
      className={`${category.name ? 'onSelected' : 'onSelecting'}`}
    >
      <S.CategoryImg onClick={toggleModal}>
        {!category.name ? (
          <Icon Icon={Question} size={18} color="#fff" />
        ) : (
          <Icon Icon={svgs[category.id - 1]} size={65} stroke={'#fff'} />
        )}
      </S.CategoryImg>

      <S.CategoryNameBtn type="button" onClick={toggleModal}>
        {category.name || '카테고리 선택'}
      </S.CategoryNameBtn>
    </S.CategoryBox>
  );
};
