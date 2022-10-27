import React from 'react';
import { PageHeader } from 'components/Common';
import { JoinForm } from 'components/Join';
import * as S from './styles';

export const JoinPage = () => {
  return (
    <>
      <PageHeader backTo="/" title="회원가입" />
      <S.PageContainer>
        <S.Description>
          <p>앱이름 가입하고</p>
          <p>동네 이웃과 소통해요</p>
        </S.Description>
        <JoinForm />
      </S.PageContainer>
    </>
  );
};
