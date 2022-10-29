import React from 'react';
import { Icon } from 'components/Common';
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';
import * as S from './styles';
import { Link } from 'react-router-dom';

export const SubmitModal = ({ closeModal }) => {
  return (
    <S.Overlay onClick={closeModal}>
      <S.ModalContainer onClick={e => e.stopPropagation()}>
        <S.IconWrap>
          <Icon Icon={HomeIcon} size={40} />
        </S.IconWrap>
        <S.TextWrap>
          <p>
            예비 앱명+러님의 동네명이
            <br />
            <span>서울특별시 송파구 오금동</span>이 맞나요?
          </p>
          <p>
            계정당 두 지역까지 설정 가능합니다. <br />
            자신의 동네가 맞는지 한 번 더 확인해주세요.
          </p>
          <p>(ex. 거주하는 동네, 직장이 있는 동네)</p>
        </S.TextWrap>
        <Link to="/join">
          <S.SubmitButton onClick={closeModal}>확인</S.SubmitButton>
        </Link>
      </S.ModalContainer>
    </S.Overlay>
  );
};
