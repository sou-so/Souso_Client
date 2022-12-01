import React from 'react';
import { NeighborList, SearchBar } from 'components/TownAuth';
import { Link } from 'react-router-dom';
import * as S from './styles';

export const SearchModal = ({ openModal }) => {
  return (
    <S.ModalContainer>
      <SearchBar />
      <NeighborList />
      <section>
        <button onClick={openModal}>동네인증완료</button>
      </section>
    </S.ModalContainer>
  );
};
