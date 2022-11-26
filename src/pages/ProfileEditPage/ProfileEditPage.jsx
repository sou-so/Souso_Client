import React from 'react';
import { PageHeader } from 'components/Common';
import { ProfileForm } from 'components/ProfileEdit';
import * as S from './styles';

export const ProfileEditPage = () => {
  return (
    <S.PageContainer>
      <PageHeader title="프로필 수정" backTo="/mypage" />
      <ProfileForm />
    </S.PageContainer>
  );
};
