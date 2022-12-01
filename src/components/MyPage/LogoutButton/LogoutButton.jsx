import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { authToken } from 'utils/authToken';
import { user } from 'api/queries/user';
import * as S from './styles';

export const LogoutButton = () => {
  const navigate = useNavigate();

  const { mutate: signout } = useMutation(user.signout, {
    onSuccess: res => {
      if (window.confirm('탈퇴하시겠습니까?')) {
        console.log(res);
        authToken.setToken('');
        alert('탈퇴 완료 🎉');
        navigate('/');
      }
    },
    onError: error => {
      console.log(error.message);
      alert('회원탈퇴에 실패했습니다. 다시 시도해주세요.');
    }
  });

  const { mutate: logout } = useMutation(user.logout, {
    onSuccess: res => {
      console.log(res);
      authToken.setToken('');
      alert('로그아웃 완료 🎉');
      navigate('/');
    },
    onError: error => {
      console.log(error.message);
      alert('로그아웃에 실패했습니다. 다시 시도해주세요.');
    }
  });

  return (
    <S.ButtonContainer>
      <button onClick={signout}>탈퇴하기</button>
      <button onClick={logout}>로그아웃</button>
    </S.ButtonContainer>
  );
};
