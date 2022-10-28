import React from 'react';
import { PageHeader } from 'components/Common';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import * as S from './styles';

export const TownAuthPage = () => {
  return (
    <>
      <PageHeader backTo="/" title="동네 인증" />
      <S.PageContainer>
        <Map center={{ lat: 33.5563, lng: 126.79581 }} className="kakao_map">
          <MapMarker position={{ lat: 33.55635, lng: 126.795841 }} />
        </Map>
      </S.PageContainer>
    </>
  );
};
