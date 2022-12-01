import React from 'react';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as GpsIcon } from 'assets/icons/gps.svg';
import * as S from './styles';
import { Icon } from 'components/Common';

export const SearchBar = () => {
  return (
    <S.SearchBar>
      <S.InputWrap>
        <input type="text" placeholder="동명(읍, 면)으로 검색 (ex. 서초동)" />
        <Icon Icon={SearchIcon} size={34} />
      </S.InputWrap>
      <S.SearchButton>
        <Icon Icon={GpsIcon} size={32} color="#fff" />
      </S.SearchButton>
    </S.SearchBar>
  );
};
