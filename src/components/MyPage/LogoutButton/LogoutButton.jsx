import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { authToken } from 'utils/authToken';
import { user } from 'api/queries/user';
import * as S from './styles';

export const LogoutButton = () => {
  const navigate = useNavigate();

  const { mutate: signout } = useMutation(user.signout, {
    onSuccess: () => {
      if (window.confirm('탈퇴하시겠습니까?')) {
        authToken.setToken('');
        toast.success('회원 탈퇴가 정상적으로 처리되었습니다.');
        navigate('/login');
      }
    },
    onError: error => {
      console.log(error.message);
      toast.error('회원탈퇴에 실패했습니다. 다시 시도해주세요.');
    }
  });

  const { mutate: logout } = useMutation(user.logout, {
    onSuccess: () => {
      authToken.setToken('');
      toast.success('로그아웃 완료 🎉');
      navigate('/login');
    },
    onError: error => {
      console.log(error.message);
      toast.error('로그아웃에 실패했습니다. 다시 시도해주세요.');
    }
  });

  return (
    <S.ButtonContainer>
      <button onClick={signout}>탈퇴하기</button>
      <button onClick={logout}>로그아웃</button>
    </S.ButtonContainer>
  );
};
