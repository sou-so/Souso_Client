import React from 'react';
import { PageHeader } from 'components/Common';
import { JoinForm } from 'components/Join';
import * as S from './styles';

export const JoinPage = () => {
  return (
    <S.PageContainer>
      <PageHeader backTo="/" title="회원가입" />
      <section>
        <S.Description>
          <p>
            <span>소소</span>에 가입하고
          </p>
          <p>동네 이웃과 소통해요</p>
        </S.Description>
        <JoinForm />
      </section>
    </S.PageContainer>
  );
};
