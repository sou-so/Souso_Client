import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

export const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.InputWrap>
        <S.Input
          type="text"
          name="email"
          value={email}
          placeholder="이메일"
          onChange={e => setEmail(e.target.value)}
        />
      </S.InputWrap>
      <S.InputWrap>
        <S.Input
          type="password"
          name="password"
          value={password}
          placeholder="비밀번호"
          onChange={e => setPassword(e.target.value)}
        />
      </S.InputWrap>
      <S.ButtonWrap>
        <Link to="#">
          <S.LoginButton
            type="submit"
            className={email && password ? '' : 'disabled'}
          >
            로그인
          </S.LoginButton>
        </Link>
      </S.ButtonWrap>
    </S.FormContainer>
  );
};
