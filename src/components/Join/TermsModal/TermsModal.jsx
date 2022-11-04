import React from 'react';
import * as S from './styles';

export const TermsModal = ({ closeModal }) => {
  return (
    <S.PageContainer onClick={closeModal}>
      <S.TermsView onClick={e => e.stopPropagation()}>
        <h2>가입약관</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit
          inventore accusantium dolore doloremque reprehenderit nostrum
          accusamus dignissimos veniam. Unde tempora, eligendi adipisci autem
          ipsum modi eum vero amet. Reiciendis?
        </div>
        <p onClick={closeModal}>닫기</p>
      </S.TermsView>
    </S.PageContainer>
  );
};
