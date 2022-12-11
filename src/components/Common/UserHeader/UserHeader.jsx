import React from 'react';
import { useLocation } from 'react-router-dom';
import { CategoryTag, ProfileImage } from 'components/Common';
import { getAge } from 'utils/dateConverter';
import * as S from './styles';

export const UserHeader = ({ data }) => {
  const {
    author: { birth, nickname, profile_image_url, location }
  } = data;

  const { pathname } = useLocation();
  const isMain = pathname === '/';

  const tag = isMain && data.category.category_name;

  const town = location && location.split(' ')[2];

  return (
    <S.HeaderContainer>
      <ProfileImage size={40} url={profile_image_url} />
      <S.UserInfo>
        <p className="name">{nickname}</p>
        <span className="age">{getAge(birth)}</span>
        {!isMain && <span className="town">{town || '상도동'}</span>}
      </S.UserInfo>
      {tag && isMain && <CategoryTag name={tag} />}
    </S.HeaderContainer>
  );
};
