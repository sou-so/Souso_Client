import React from 'react';
import { ScrollContainer } from 'components/Common';
import { TermsContents } from './TermsContents';
import * as S from './styles';

export const TermsModal = ({ closeModal }) => {
  return (
    <S.PageContainer onClick={closeModal}>
      <S.TermsView onClick={e => e.stopPropagation()}>
        <h2>가입약관</h2>
        <S.TermsContainer>
          <ScrollContainer>
            <TermsContents />
          </ScrollContainer>
        </S.TermsContainer>
        <button onClick={closeModal}>닫기</button>
      </S.TermsView>
    </S.PageContainer>
  );
};
