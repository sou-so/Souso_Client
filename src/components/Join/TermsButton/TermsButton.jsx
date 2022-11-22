import React, { useState } from 'react';
import { TermsModal } from 'components/Join';
import * as S from './styles';

export const TermsButton = ({ isAgreed, setIsAgreed }) => {
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const toggleModal = () => {
    setTermsModalOpen(prev => !prev);
  };

  return (
    <>
      <S.TermsWarp>
        <S.AgreeBtn htmlFor="terms" className={isAgreed ? 'active' : ''} />
        <input
          type="checkbox"
          id="terms"
          checked={isAgreed}
          onChange={() => setIsAgreed(prev => !prev)}
        />
        <label htmlFor="terms">소소의 가입약관에 모두 동의합니다.</label>
        <S.TermsBtn onClick={toggleModal}>확인하기</S.TermsBtn>
      </S.TermsWarp>

      {termsModalOpen && <TermsModal closeModal={toggleModal} />}
    </>
  );
};
