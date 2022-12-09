import React from 'react';
import { useLocation } from 'react-router-dom';
import { CategoryTag, ProfileImage } from 'components/Common';
import { getAge } from 'utils/dateConverter';
import * as S from './styles';

export const UserHeader = ({ data, feedAuthor, view }) => {
  const {
    author: { birth, nickname, profile_image_url, location, user_id }
  } = data;

  const { pathname } = useLocation();
  const isMain = pathname === '/';

  const myFeed = feedAuthor && feedAuthor === user_id && '글 작성자';
  const tag = feedAuthor || !isMain ? myFeed : data.category.category_name;

  const town = location && location.split(' ')[2];

  return (
    <S.HeaderContainer>
      <ProfileImage size={40} url={profile_image_url} />
      <S.UserInfo>
        <p className="name">{nickname}</p>
        <span className="age">{getAge(birth)}</span>
        {!isMain && <span className="town">{town || '상도동'}</span>}
      </S.UserInfo>
      {tag && !view && <CategoryTag name={tag} />}
    </S.HeaderContainer>
  );
};
