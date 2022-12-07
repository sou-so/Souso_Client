import React, { useEffect, useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { useSetRecoilState } from 'recoil';
import { addressState } from 'atoms/address';

import { SearchSection } from 'components/TownAuth';
import * as S from './styles';

export const KakaoMap = ({ openModal }) => {
  const [currentGeo, setCurrentGeo] = useState({ lat: 0, lng: 0 });
  const [pickedGeo, setPickedGeo] = useState(currentGeo);
  const [address, setAddress] = useState([]);

  const setSaveAddress = useSetRecoilState(addressState);

  const { kakao } = window; // head에 작성한 Kakao API 불러오기
  const mapRef = useRef();

  // 선택한 위치의 위도경도를 가져옵니다
  const getPickedGeo = (_, mouseEvent) => {
    setPickedGeo({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng()
    });
  };

  // 현재위치로 지도를 이동시킵니다.
  const moveToCurrent = () => {
    const center = new kakao.maps.LatLng(currentGeo.lat, currentGeo.lng);
    if (mapRef.current) {
      mapRef.current.panTo(center);
      setPickedGeo(currentGeo);
    }
  };

  useEffect(() => {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setCurrentGeo({
          lat: coords.latitude,
          lng: coords.longitude
        });
        setPickedGeo({
          lat: coords.latitude,
          lng: coords.longitude
        });
      });
    }
  }, []);

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();

    // 좌표로 상세 주소 정보를 요청합니다
    const getAddressFromGeo = (coords, callback) => {
      geocoder.coord2Address(coords.lng, coords.lat, callback);
    };

    // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시합니다
    getAddressFromGeo(pickedGeo, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setAddress([
          result[0].address.region_1depth_name,
          result[0].address.region_2depth_name,
          result[0].address.region_3depth_name
        ]);
      }
    });
  }, [kakao, pickedGeo, setAddress]);

  useEffect(() => {
    setSaveAddress(address); // 동네값 저장
  }, [setSaveAddress, address]);

  return (
    <S.MapContainer>
      <Map
        center={currentGeo}
        onClick={getPickedGeo}
        className="kakao_map"
        ref={mapRef}
      >
        <MapMarker position={pickedGeo} />
      </Map>
      <SearchSection openModal={openModal} moveToCurrent={moveToCurrent} />
    </S.MapContainer>
  );
};
