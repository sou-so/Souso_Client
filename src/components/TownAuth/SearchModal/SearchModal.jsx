import React from 'react';
import { NeighborList, SearchBar } from 'components/TownAuth';
import * as S from './styles';

export const SearchModal = ({ openModal, moveToCurrent }) => {
  return (
    <S.ModalContainer>
      <SearchBar moveToCurrent={moveToCurrent} />
      <NeighborList openModal={openModal} />
      <p>
        등록을 원하는 동네를 지도에서 선택한 후, <br />
        동네인증하기 버튼을 눌러주세요.
      </p>
    </S.ModalContainer>
  );
};
