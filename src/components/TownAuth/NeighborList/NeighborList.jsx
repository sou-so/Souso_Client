import React from 'react';
import * as S from './styles';

export const NeighborList = () => {
  return (
    <S.ListContainer>
      <S.ListTitle>
        근처동네 <span>(반경 6km)</span>
      </S.ListTitle>
      <S.NeighborList>
        <li>서울특별시 동작구 상도동</li>
        <li>서울특별시 동작구 상도1동</li>
        <li>서울특별시 동작구 상도2동</li>
        <li>서울특별시 동작구 상도3동</li>
        <li>서울특별시 동작구 상도4동</li>
        <li>서울특별시 동작구 흑석동</li>
      </S.NeighborList>
    </S.ListContainer>
  );
};
