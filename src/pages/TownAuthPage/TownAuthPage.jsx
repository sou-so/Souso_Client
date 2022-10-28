import React, { useEffect, useState } from 'react';
import { PageHeader } from 'components/Common';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import * as S from './styles';
import { SearchModal } from 'components/TownAuth';

export const TownAuthPage = () => {
  const [geo, setGeo] = useState({ lat: 33.450701, lng: 126.570667 });

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(position => {
        setGeo({
          lat: position.coords.latitude, // 위도
          lng: position.coords.longitude // 경도
        });
      });
    }
  }, []);

  return (
    <>
      <PageHeader backTo="/" title="동네 인증" />
      <S.PageContainer>
        <Map center={{ lat: geo.lat, lng: geo.lng }} className="kakao_map">
          <MapMarker position={{ lat: geo.lat, lng: geo.lng }} />
        </Map>
        <SearchModal />
      </S.PageContainer>
    </>
  );
};
