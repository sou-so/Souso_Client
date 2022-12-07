import React, { useState } from 'react';

import { PageHeader } from 'components/Common';
import { KakaoMap, SubmitModal } from 'components/TownAuth';
import * as S from './styles';

export const TownAuthPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => setOpenModal(prev => !prev);

  return (
    <S.PageContainer>
      <PageHeader backTo="/" title="동네 인증" />
      <KakaoMap openModal={toggleModal} />
      {openModal && <SubmitModal closeModal={toggleModal} />}
    </S.PageContainer>
  );
};
