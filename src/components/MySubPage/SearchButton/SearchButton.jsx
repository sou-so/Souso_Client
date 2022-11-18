import React from 'react';
import { Icon } from 'components/Common';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import * as S from './styles';

export const SearchButton = () => {
  return (
    <S.ButtonContainer>
      <Icon Icon={Search} size={30} />
    </S.ButtonContainer>
  );
};
