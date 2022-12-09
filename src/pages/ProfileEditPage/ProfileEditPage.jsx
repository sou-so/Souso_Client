import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { user } from 'api/queries/user';
import { PageHeader } from 'components/Common';
import { ProfileForm } from 'components/ProfileEdit';
import { toast } from 'react-toastify';
import * as S from './styles';

export const ProfileEditPage = () => {
  const { data, isLoading } = useQuery(['user'], user.getProfile);

  const navigate = useNavigate();

  const { mutate } = useMutation(user.editProfile, {
    onSuccess: () => {
      toast.success('내 정보 수정 성공 🎉');
      navigate(`/mypage`);
    },
    onError: error => {
      console.log(error.message);
      toast.error('내 정보 수정에 실패했습니다. 다시 시도해주세요.');
    }
  });

  return (
    <S.PageContainer>
      <PageHeader title="프로필 수정" backTo="/mypage" />
      {!isLoading && <ProfileForm data={data} mutate={mutate} />}
    </S.PageContainer>
  );
};
