import React from 'react';
import { Link } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { townState } from 'atoms/town';

import { Icon } from 'components/Common';
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';
import * as S from './styles';

export const SubmitModal = ({ closeModal }) => {
  const address = useRecoilValue(townState);

  return (
    <S.Overlay onClick={closeModal}>
      <S.ModalContainer onClick={e => e.stopPropagation()}>
        <S.IconWrap>
          <Icon Icon={HomeIcon} size={40} />
        </S.IconWrap>
        <S.TextWrap>
          <p>
            동네명이
            <span>
              {address[0]} {address[1]} {address[2]}
            </span>
            이 맞나요?
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
