import React from 'react';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as GpsIcon } from 'assets/icons/gps.svg';
import { Icon } from 'components/Common';
import { toast } from 'react-toastify';
import * as S from './styles';

export const SearchBar = ({ moveToCurrent }) => {
  return (
    <S.SearchBar>
      <S.InputWrap>
        <input type="text" placeholder="동명(읍, 면)으로 검색 (ex. 서초동)" />
        <Icon
          Icon={SearchIcon}
          size={34}
          onClick={() => toast.warning('서비스 준비 중 입니다.')}
        />
      </S.InputWrap>
      <S.SearchButton onClick={moveToCurrent}>
        <Icon Icon={GpsIcon} size={32} color="#fff" />
      </S.SearchButton>
    </S.SearchBar>
  );
};
