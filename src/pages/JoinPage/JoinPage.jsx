import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { PageHeader } from 'components/Common';
import { JoinForm } from 'components/Join';
import { join } from 'api/queries/join';
import { authToken } from 'utils/authToken';
import * as S from './styles';

export const JoinPage = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation(join.submit, {
    onSuccess: res => {
      console.log(res);
      authToken.setToken(res.access_token);
      alert('회원가입 완료 🎉');
      navigate('/');
    },
    onError: error => {
      console.log(error.message);
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  });

  return (
    <S.PageContainer>
      <PageHeader backTo="/mytown" title="회원가입" />
      <section>
        <S.Description>
          <p>
            <span>소소</span>에 가입하고
          </p>
          <p>동네 이웃과 소통해요</p>
        </S.Description>
        <JoinForm createAccount={mutate} />
      </section>
    </S.PageContainer>
  );
};
