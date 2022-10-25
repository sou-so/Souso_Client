import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

export const IntroPage = () => {
  return (
    <S.PageContainer>
      <S.LogoWrap>
        LOGO
        <p>Text</p>
      </S.LogoWrap>
      <S.ButtonWrap>
        <Link to={'/join'}>
          <S.JoinButton>시작하기</S.JoinButton>
        </Link>
        <S.LoginButton>
          이미 계정이 있나요?
          <Link to={'/login'}>로그인</Link>
        </S.LoginButton>
      </S.ButtonWrap>
    </S.PageContainer>
  );
};
