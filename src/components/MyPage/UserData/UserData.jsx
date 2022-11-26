import React from 'react';
import { useQuery } from 'react-query';
import { ReactComponent as Locate } from 'assets/icons/location.svg';
import { Icon, ProfileImage } from 'components/Common';
import { getAge } from 'utils/dateConverter';
import { user } from 'api/queries/user';
import * as S from './styles';

export const UserData = () => {
  const { data, isLoading } = useQuery(['user'], user.getProfile);
  // const { nickname, birth, profile_image_url, town } = data;

  return (
    <S.UserDataContainer>
      <S.MyTown>
        <Icon Icon={Locate} size={13} />
        전포동
      </S.MyTown>
      <ProfileImage size={80} url={!isLoading && data.profile_image_url} />
      <S.Name>{!isLoading ? data.nickname : 'SOUSO'}</S.Name>
      <S.Age>{!isLoading ? getAge(data.birth) : '20000101'}</S.Age>
    </S.UserDataContainer>
  );
};
