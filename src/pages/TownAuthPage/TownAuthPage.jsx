import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { PageHeader } from 'components/Common';
import { KakaoMap, SubmitModal } from 'components/TownAuth';
import * as S from './styles';

export const TownAuthPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(prev => !prev);

  const { state } = useLocation();
  const backTo = state && state.from === 'profile' ? '/mypage/edit' : '/';

  return (
    <S.PageContainer>
      <PageHeader backTo={backTo} title="동네 인증" />
      <KakaoMap openModal={toggleModal} />
      {openModal && <SubmitModal closeModal={toggleModal} />}
    </S.PageContainer>
  );
};
