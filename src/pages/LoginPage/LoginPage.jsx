import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from 'components/Login';
import logoImage from 'assets/images/logo.png';
import * as S from './styles';

export const LoginPage = () => {
  return (
    <S.PageContainer>
      <S.AppLogo>
        <p>이웃과의 소통</p>
        <h1>소소</h1>
        <img src={logoImage} alt="logo" />
      </S.AppLogo>

      <LoginForm />

      <S.LinkTo>
        <li>
          비밀번호를 잊어버리셨나요?
          <Link to="#">비밀번호 찾기</Link>
        </li>
        <li>
          계정이 없으신가요?
          <Link to="/mytown">가입하기</Link>
        </li>
      </S.LinkTo>
    </S.PageContainer>
  );
};
