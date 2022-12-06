import React, { useEffect, useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useSetRecoilState } from 'recoil';
import { townState } from 'recoil/atom';
import { PageHeader } from 'components/Common';
import { SearchModal, SubmitModal } from 'components/TownAuth';

import * as S from './styles';

export const TownAuthPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentGeo, setCurrentGeo] = useState({ lat: 0, lng: 0 });
  const [pickedGeo, setPickedGeo] = useState(currentGeo);
  const [address, setAddress] = useState([]);

  const setCurrentTown = useSetRecoilState(townState);

  const mapRef = useRef();

  const toggleModal = () => setOpenModal(prev => !prev);

  const getPickedGeo = (_, mouseEvent) => {
    setPickedGeo({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng()
    });
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
    const { kakao } = window; // head에 작성한 Kakao API 불러오기
    const geocoder = new kakao.maps.services.Geocoder();

    // 좌표로 상세 주소 정보를 요청합니다
    const getAddressFromGeo = (coords, callback) => {
      geocoder.coord2Address(coords.lng, coords.lat, callback);
    };

    // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보 표시
    getAddressFromGeo(pickedGeo, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setAddress([
          result[0].address.region_1depth_name,
          result[0].address.region_2depth_name,
          result[0].address.region_3depth_name
        ]);
        console.log(result[0].address.address_name);
      }
    });
  }, [pickedGeo, setAddress]);

  useEffect(() => {
    setCurrentTown(address);
    localStorage.setItem('souso_town', address[2]);
  }, [setCurrentTown, address]);

  return (
    <>
      <PageHeader backTo="/" title="동네 인증" />
      <S.PageContainer>
        <Map
          center={currentGeo}
          onClick={getPickedGeo}
          className="kakao_map"
          ref={mapRef}
        >
          <MapMarker position={pickedGeo} />
          {/* <button
            onClick={() => {
              const map = mapRef.current;
              console.log(
                map.getBounds(),
                map.getBounds().getSouthWest(),
                map.getBounds().getNorthEast()
              );
            }}
          >
          </button> */}
        </Map>
        <SearchModal openModal={toggleModal} />
      </S.PageContainer>
      {openModal && <SubmitModal closeModal={toggleModal} />}
    </>
  );
};
