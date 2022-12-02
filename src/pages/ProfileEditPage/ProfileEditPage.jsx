import React from 'react';
import { useQuery } from 'react-query';
import { user } from 'api/queries/user';
import { PageHeader } from 'components/Common';
import { ProfileForm } from 'components/ProfileEdit';
import * as S from './styles';

export const ProfileEditPage = () => {
  const { data, isLoading } = useQuery(['user'], user.getProfile);

  return (
    <S.PageContainer>
      <PageHeader title="프로필 수정" backTo="/mypage" />
      {!isLoading && <ProfileForm data={data} />}
    </S.PageContainer>
  );
};
