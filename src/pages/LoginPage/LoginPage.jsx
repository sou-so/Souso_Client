import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from 'components/Login';
import * as S from './styles';

export const LoginPage = () => {
  return (
    <S.PageContainer>
      <S.AppLogo>
        <p>이웃과의 소통</p>
        <h1>넘블 커뮤니티</h1>
        <img
          src="https://assets.stickpng.com/images/6010865599eef2000443c321.png"
          alt="logo"
        />
      </S.AppLogo>

      <LoginForm />

      <S.LinkTo>
        <li>
          비밀번호를 잊어버리셨나요?
          <Link to="#">비밀번호 찾기</Link>
        </li>
        <li>
          계정이 없으신가요?
          <Link to="/join">가입하기</Link>
        </li>
      </S.LinkTo>
    </S.PageContainer>
  );
};
