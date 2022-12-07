import React from 'react';
import { useLocation } from 'react-router-dom';
import { CategoryTag, ProfileImage, TextClamp } from 'components/Common';
import { getAge } from 'utils/dateConverter';
import * as S from './styles';

export const PostBodyUser = ({ postData }) => {
  const {
    author: { birth, nickname, profile_image_url, location },
    category,
    content
  } = postData;

  const { pathname } = useLocation();
  const isMain = pathname === '/';

  const town = location && location.split(' ')[2];

  return (
    <S.BodyContainer>
      <S.PostUser>
        <ProfileImage size={31} url={profile_image_url} />
        <S.UserInfo>
          <p className="name">{nickname}</p>
          <span className="age">{getAge(birth)}</span>
          {!isMain && <span className="town">{town || '상도동'}</span>}
        </S.UserInfo>
        {isMain && category && <CategoryTag name={category.category_name} />}
      </S.PostUser>

      <S.PostText>
        {isMain || pathname.includes('list') ? (
          <TextClamp line={3}>{content}</TextClamp>
        ) : (
          <p>{content}</p>
        )}
      </S.PostText>
    </S.BodyContainer>
  );
};
