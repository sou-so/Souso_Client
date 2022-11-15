import React from 'react';
import { ReactComponent as Locate } from 'assets/icons/location.svg';
import { Icon, ProfileImage } from 'components/Common';
import * as S from './styles';

export const UserData = ({ data }) => {
  const { name, location, profile_img, age } = data;

  return (
    <S.UserDataContainer>
      <S.MyLocation>
        <Icon Icon={Locate} size={13} />
        {location}
      </S.MyLocation>
      <ProfileImage size={80} url={profile_img} />
      <S.Name>{name}</S.Name>
      <S.Age>{age}</S.Age>
    </S.UserDataContainer>
  );
};
