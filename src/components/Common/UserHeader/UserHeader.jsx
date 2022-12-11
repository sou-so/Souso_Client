import React from 'react';
import { useLocation } from 'react-router-dom';
import { LabelTag, ProfileImage } from 'components/Common';
import { getAge } from 'utils/dateConverter';
import * as S from './styles';

export const UserHeader = ({ postData }) => {
  const {
    author: { birth, nickname, profile_image_url, location }
  } = postData;

  const { pathname } = useLocation();
  const isMain = pathname === '/';

  const tag = isMain && postData.category.category_name;

  const town = location && location.split(' ')[2];

  return (
    <S.HeaderContainer>
      <ProfileImage size={40} url={profile_image_url} />
      <S.UserInfo>
        <p className="name">{nickname}</p>
        <span className="age">{getAge(birth)}</span>
        {!isMain && <span className="town">{town || '상도동'}</span>}
      </S.UserInfo>
      {isMain && <LabelTag name={tag} />}
    </S.HeaderContainer>
  );
};
