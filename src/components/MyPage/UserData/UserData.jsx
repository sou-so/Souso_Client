import React from 'react';
import { ReactComponent as Locate } from 'assets/icons/location.svg';
import { Icon, ProfileImage } from 'components/Common';
import { getAge } from 'utils/dateConverter';
import * as S from './styles';

export const UserData = ({ data }) => {
  const { nickname, birth, profile_image_url, location } = data;
  const town = location && location.split(' ')[2];

  return (
    <S.UserDataContainer>
      <S.MyTown>
        <Icon Icon={Locate} size={13} />
        {town || '상도동'}
      </S.MyTown>
      <ProfileImage size={80} url={profile_image_url} />
      <S.Name>{nickname}</S.Name>
      <S.Age>{getAge(birth)}</S.Age>
    </S.UserDataContainer>
  );
};
