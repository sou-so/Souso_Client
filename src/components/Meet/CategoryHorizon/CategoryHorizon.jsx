import React from 'react';
import { Link } from 'react-router-dom';

import { Icon, ScrollHorizon } from 'components/Common';
import { svgs } from 'components/Common/Category/svgs';
import * as S from './styles';

export const CategoryHorizon = ({ linkTo }) => {
  const list = ['전체 분야', '운동', '공예', '공연', '독서', '영화'];
  console.log(list.concat(list.slice(-2)));
  return (
    <ScrollHorizon>
      <S.CategoryContainer>
        {list.concat(list.slice(-2)).map((item, i) => (
          <S.CategoryItem key={i}>
            <Link>
              <Icon Icon={svgs[i]} stroke="#fff" size={25} />
              <S.Name>{item}</S.Name>
            </Link>
          </S.CategoryItem>
        ))}
      </S.CategoryContainer>
    </ScrollHorizon>
  );
};
