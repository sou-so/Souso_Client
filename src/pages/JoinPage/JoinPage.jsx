import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { PageHeader } from 'components/Common';
import { JoinForm } from 'components/Join';
import { join } from 'utils/api/joinAPI';
import * as S from './styles';

export const JoinPage = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation(join.submit, {
    onSuccess: res => {
      console.log(res);
      alert('회원가입 완료 🎉');
      navigate('/');
    },
    onError: error => {
      console.log(error.response.data);
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
        <JoinForm mutate={mutate} />
      </section>
    </S.PageContainer>
  );
};
