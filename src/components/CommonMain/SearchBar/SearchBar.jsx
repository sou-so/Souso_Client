import React from 'react';
import { Icon } from 'components/Common';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import * as S from './styles';

export const SearchBar = ({ placeholder }) => {
  return (
    <S.SearchBarContainer>
      <input type="text" placeholder={placeholder} className="bg" />
      <Icon Icon={SearchIcon} size={34} color="#343434" />
    </S.SearchBarContainer>
  );
};
