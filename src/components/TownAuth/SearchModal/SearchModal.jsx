import React from 'react';
import { NeighborList, SearchBar } from 'components/TownAuth';
import * as S from './styles';

export const SearchModal = ({ openModal }) => {
  return (
    <S.ModalContainer>
      <SearchBar />
      <NeighborList />
      <button onClick={openModal}>동네인증완료</button>
    </S.ModalContainer>
  );
};
