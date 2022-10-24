import React from 'react';
import { PageHeader } from 'components/Common';
import { LoginForm } from 'components/Login';
import * as S from './styles';

export const LoginPage = () => {
  return (
    <>
      <PageHeader backTo="/" title="로그인" />
      <S.PageContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In temporibus
          voluptate nobis dicta nemo incidunt
        </p>
        <LoginForm />
      </S.PageContainer>
    </>
  );
};
