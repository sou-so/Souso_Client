import React from 'react';
import { useRecoilValue } from 'recoil';
import { addressState } from 'atoms/address';

import * as S from './styles';

export const NeighborList = ({ openModal }) => {
  const address = useRecoilValue(addressState);

  return (
    <S.ListContainer>
      <S.ListTitle>
        근처동네
        {/* <span>(반경 6km)</span> */}
      </S.ListTitle>
      <button onClick={openModal}>동네인증하기</button>
      <S.NeighborList>
        <li onClick={openModal}>
          {address[0]} {address[1]} {address[2]}
        </li>
      </S.NeighborList>
    </S.ListContainer>
  );
};
