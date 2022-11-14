import { ProfileImage } from 'components/Common';
import React from 'react';
import * as S from './styles';

export const PostBodyUser = ({ data }) => {
  const { user } = data;

  return (
    <>
      <S.WriterContainer>
        <ProfileImage size={31} url={user.profile_img} />
        <S.UserInfo>
          <p>{user.name}</p>
          <div>
            <p>{user.age}</p>
            <p>둔촌동</p>
          </div>
        </S.UserInfo>
      </S.WriterContainer>

      <S.PostText>
        <p>{data.text}</p>
      </S.PostText>
    </>
  );
};
