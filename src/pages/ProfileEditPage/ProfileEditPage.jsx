import React, { useState } from 'react';
import { PageHeader } from 'components/Common';
import * as S from './styles';
import { EditImage, UserData } from 'components/ProfileEdit';

export const ProfileEditPage = () => {
  const [imageURL, setImageURL] = useState('');

  return (
    <S.PageContainer>
      <PageHeader title="프로필 수정" backTo="/mypage" />
      <S.ProfileForm>
        <EditImage imageURL={imageURL} setImageURL={setImageURL} />
        <UserData />
        <S.SubmitButton>프로필 수정하기</S.SubmitButton>
      </S.ProfileForm>
    </S.PageContainer>
  );
};
