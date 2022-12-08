import React from 'react';
import { InComplete } from 'components/Common';
import * as S from './styles';

export const ChatPage = () => {
  return (
    <S.PageContainer>
      <header>채팅</header>
      <InComplete />
    </S.PageContainer>
  );
};
