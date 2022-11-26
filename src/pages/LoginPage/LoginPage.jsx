import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { LoginForm } from 'components/Login';
import { user } from 'api/queries/user';
import { authToken } from 'utils/authToken';
import logoImage from 'assets/images/logo.png';
import * as S from './styles';

/*
TEST
 "email": "soso@gmail.com",
 "password": "Ab12345!"
 */

export const LoginPage = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation(user.login, {
    onSuccess: res => {
      console.log(res);
      authToken.setToken(res.data.access_token);
      alert('로그인 완료 🎉');
      navigate('/');
    },
    onError: error => {
      console.log(error.response.data);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  });

  return (
    <S.PageContainer>
      <S.AppLogo>
        <img src={logoImage} alt="logo" />
        <p>소년소녀들의 모임</p>
        <h1>소소</h1>
      </S.AppLogo>

      <LoginForm login={mutate} />

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
