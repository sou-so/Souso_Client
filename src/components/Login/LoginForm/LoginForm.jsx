import React, { useState } from 'react';
import * as S from './styles';

export const LoginForm = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (email && password) {
      login({
        email: email,
        password: password
      });
    }
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

      <S.LoginButton
        type="submit"
        className={email && password ? '' : 'disabled'}
      >
        로그인
      </S.LoginButton>
    </S.FormContainer>
  );
};
