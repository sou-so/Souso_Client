import React from 'react';
import { NeighborList, SearchBar } from 'components/TownAuth';
import * as S from './styles';

export const SearchModal = () => {
  return (
    <S.ModalContainer>
      <SearchBar />
      <NeighborList />
    </S.ModalContainer>
  );
};
