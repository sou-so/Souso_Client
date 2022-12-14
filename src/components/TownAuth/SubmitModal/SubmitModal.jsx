import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useMutation, useQueryClient } from 'react-query';
import { user } from 'api/queries/user';

import { useRecoilValue } from 'recoil';
import { addressState } from 'atoms/address';

import { Icon } from 'components/Common';
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';
import { toast } from 'react-toastify';
import * as S from './styles';

export const SubmitModal = ({ closeModal }) => {
  const { state } = useLocation();
  const address = useRecoilValue(addressState);

  const queryClient = useQueryClient();

  const { mutate } = useMutation(user.editTown, {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
    onError: error => {
      console.log(error.message);
      toast.error('동네 수정에 실패했습니다. 다시 시도해주세요.');
    }
  });

  const handleSubmit = () => {
    if (state.from === 'main') {
      mutate({ location: address.join(' ') });
    }
    closeModal();
  };

  const linkTo = () => {
    if (state) {
      switch (state.from) {
        case 'profile':
          return '/mypage/edit';
        case 'login':
          return '/join';
        case 'main':
          return '/';
        default:
          throw new Error('Invalid link');
      }
    }
  };

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
        <Link to={linkTo()}>
          <S.SubmitButton onClick={handleSubmit}>확인</S.SubmitButton>
        </Link>
      </S.ModalContainer>
    </S.Overlay>
  );
};
