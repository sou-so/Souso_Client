import React from 'react';
import * as S from './styles';

export const NeighborList = () => {
  return (
    <S.ListContainer>
      <S.ListTitle>
        근처동네 <span>(반경 6km)</span>
      </S.ListTitle>
      <S.NeighborList>
        <li>서울특별시 송파구 둔촌동</li>
        <li>서울특별시 송파구 둔촌동</li>
        <li>서울특별시 송파구 둔촌동</li>
      </S.NeighborList>
    </S.ListContainer>
  );
};
