import React from 'react';
import { NeighborList } from 'components/TownAuth';
import * as S from './styles';

export const SearchModal = () => {
  return (
    <S.ModalContainer>
      <NeighborList />
    </S.ModalContainer>
  );
};
