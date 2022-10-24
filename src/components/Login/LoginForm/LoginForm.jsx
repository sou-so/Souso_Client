import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

export const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.InputWrap>
        <h3>이메일</h3>
        <S.Input placeholder="email" />
      </S.InputWrap>
      <S.InputWrap>
        <h3>비밀번호</h3>
        <S.Input placeholder="password" />
      </S.InputWrap>
      <S.ButtonWrap>
        <Link to="/">
          <S.LoginButton>로그인</S.LoginButton>
        </Link>
        <Link to="/join">회원가입</Link>
      </S.ButtonWrap>
    </S.FormContainer>
  );
};
